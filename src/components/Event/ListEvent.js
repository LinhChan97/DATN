import React from 'react'
import callApi from '../../utils/apiCaller';

class ListEvent extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      events: [],
      searchValue: '',
      location: '',
      filter: '',
      causes: []
    }
  }


  componentDidMount() {
    callApi('events','GET').then(res => {
      this.setState({events: res.data.data})
    })
    callApi('causes','GET').then(res => {
      this.setState({causes: res.data.data})
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
    let {causes,events,searchValue,filter}=this.state

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
          if(a.start_date<b.start_date) return filter; else return -filter;
        }
      })
    } // location 
    return (
      <div className="container mg-10">
        <div className="row">
          <div className="col-xs-3 col-sm-4 col-4 col-md-3 col-lg-3 mg-10">
            <h3>Search by key word</h3>
            <hr>
            </hr>
            <div className="text-center">
              <input type="search" name="" id="input" className="form-control" value="" required="required" title="" />
              <button type="button" className="btn btn-primary mg-10">Search</button>
            </div>
            <h3>Causes</h3>
            <hr></hr>
            <div className="checkbox">
              {
                causes.map((item,index) => {
                  return (
                    <div>
                      <label key={index}>
                        <input type="checkbox" value="" />
                        {item.name}
                      </label>
                      <br></br>
                    </div>
                  )
                })
              }
            </div>
            <h3>Sort by</h3>
            <hr></hr>
            <div className="checkbox">
              <label>
                <input type="checkbox" value="" />
                Ending soon
          </label>
              <br></br>
              <label>
                <input type="checkbox" value="" />
                Recently added
          </label>
              <br></br>
            </div>
            <div className="text-center">
              <button type="button" className="btn btn-primary mg-10">Search</button>
            </div>
          </div>
          <div className="col-xs-9 col-sm-8 col-8 col-md-9 col-lg-9 mg-10">
            {
              events.map((item,index) => {
                return (
                  <div className="col-xs-12 col-sm-12 col-12 col-md-6 col-lg-6 mg-10" key={index}>
                    <div class="panel panel-default">
                      <div class="panel-body">
                        <img src={item.avatar} className="image-thumbnail" alt="Item"></img>
                        <a href={`events/${item.id}`}> <h4>{item.name}</h4>
                        </a>
                        <i className="fa fa-map-marker">{item.location}</i>
                        <p>Start date: {item.start_date}</p>
                        <div className="text-center">
                          <a class="btn btn-danger" href={`shop/event/${item.id}`} role="button">Shop now</a>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    );
  }

}

export default ListEvent