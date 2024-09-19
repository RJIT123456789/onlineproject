
function Chart() {
    return (
        <>
            {/* <!-- Main row --> */}
            <div className="row">
                {/* <!-- Left col --> */}
                <section className="col-lg-7 connectedSortable">
                    {/* <!-- Custom tabs (Charts with tabs)--> */}
                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title">
                                <i className="fas fa-chart-pie mr-1"></i>
                                Sales
                            </h3>
                            <div className="card-tools">
                                <ul className="nav nav-pills ml-auto">
                                    <li className="nav-item">
                                        <a className="nav-link active" href="#revenue-chart" data-toggle="tab">Area</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#sales-chart" data-toggle="tab">Donut</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* <!-- /.card-header --> */}
                        <div className="card-body">
                            <div className="tab-content p-0">
                                {/* <!-- Morris chart - Sales --> */}
                                <div className="chart tab-pane active" id="revenue-chart"
                                    style={{ position: "relative", height: "300px" }}>
                                    <canvas id="revenue-chart-canvas" height="300" style={{ height: "300px" }}></canvas>
                                </div>
                                <div className="chart tab-pane" id="sales-chart" style={{ position: "relative", height: "300px" }}>
                                    <canvas id="sales-chart-canvas" height="300" style={{ height: "300px" }}></canvas>
                                </div>
                            </div>
                        </div>
                        {/* <!-- /.card-body --> */}
                    </div>
                    {/* <!-- /.card --> */}
                </section>
                {/* <!-- /.Left col --> */}
                {/* <!-- right col (We are only adding the ID to make the widgets sortable)--> */}
                <section className="col-lg-5 connectedSortable">

                    {/* <!-- Map card --> */}
                    <div className="card bg-gradient-primary">
                        <div className="card-header border-0">
                            <h3 className="card-title">
                                <i className="fas fa-map-marker-alt mr-1"></i>
                                Visitors
                            </h3>
                            {/* <!-- card tools --> */}
                            <div className="card-tools">
                                <button type="button" className="btn btn-primary btn-sm daterange" title="Date range">
                                    <i className="far fa-calendar-alt"></i>
                                </button>
                                <button type="button" className="btn btn-primary btn-sm" data-card-widget="collapse" title="Collapse">
                                    <i className="fas fa-minus"></i>
                                </button>
                            </div>
                            {/* <!-- /.card-tools --> */}
                        </div>
                        <div className="card-body">
                            <div id="world-map" style={{ height: "250px", width: "100%" }} ></div>
                        </div>
                        {/* <!-- /.card-body--> */}
                        <div className="card-footer bg-transparent">
                            <div className="row">
                                <div className="col-4 text-center">
                                    <div id="sparkline-1"></div>
                                    <div className="text-white">Visitors</div>
                                </div>
                                {/* <!-- ./col --> */}
                                <div className="col-4 text-center">
                                    <div id="sparkline-2"></div>
                                    <div className="text-white">Online</div>
                                </div>
                                {/* <!-- ./col --> */}
                                <div className="col-4 text-center">
                                    <div id="sparkline-3"></div>
                                    <div className="text-white">Sales</div>
                                </div>
                                {/* <!-- ./col --> */}
                            </div>
                            {/* <!-- /.row --> */}
                        </div>
                    </div>
                    {/* <!-- /.card --> */}
                </section>
                {/* <!-- right col --> */}
            </div>
            {/* <!-- /.row (main row) --> */}
        </>
    )
}

export default Chart