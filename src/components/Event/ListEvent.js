import React from 'react'
import callApi from '../../utils/apiCaller';
import SearchBar from '../SearchBar/SearchBar'

class ListEvent extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      events: [],
      searchValue: '',
      location: '',
      filter: ''
    }
  }


  componentDidMount() {
    callApi('events','GET').then(res => {
      this.setState({events: res.data.data})
    })
  }
  onSendQuery=(params) => {
    this.setState({
      searchValue: params.q,
      location: params.location,
      filter: params.filter
    })
  }
  render() {
    let {events,searchValue,filter}=this.state

    if(searchValue) {
      events=events.filter(event => {
        return event.name.toLowerCase().indexOf(searchValue)!==-1
      })
    }
    if(filter) {
      events=events.sort((a,b) => {
        if(filter==='0') {
          return 0
        }
        if(filter==='1') {
          if(a.start_date<b.start_date) return filter;
          else return -filter;
        }
      })
    }
    // location

    return (
      <div className="container">
        <SearchBar onSendQuery={this.onSendQuery} />
        <div className="row">
          {
            events.map((item,index) => {
              return (
                <div className="col-xs-3 col-sm-4 col-4 col-md-3 col-lg-3 mg-10" key={index}>
                  <img src={item.avatar} className="image-thumbnail" alt="Item"></img>
                  <a href={`events/${item.id}`}>
                    <h3>{item.name}</h3>
                  </a>
                  <i className="fa fa-map-marker">{item.location}</i>
                  <p>Start date: {item.start_date}</p>
                  <h5>{item.description}</h5>

                  <div className="text-center">
                    <button type="button" class="btn btn-danger">Shop now</button>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    );
  }

}

export default ListEvent