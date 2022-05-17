import React from 'react'
import { Link } from 'react-router-dom'
import companyCards from '../assets/JsonData/company-card-data.json'
import CompanyCard from '../components/company-card/CompanyCard'

export const Company = () => {
    return (
        <div>
            <h2 className="page-header">Company</h2>
            <hr className="featurette-divider" />
            <div className="row">
                <div className="col-6">
                    <div className="row">
                        {
                            companyCards.map((item, index) => (
                                <div className="col-6" key={index}>
                                    <Link to={item.route} key={index}>
                                        <CompanyCard
                                            icon={item.icon}
                                            count={item.count}
                                            title={item.title}



                                        />
                                    </Link>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="col-6">
                    <div className="card">
                        <div className="card-header">Quote</div>
                        <div className="card-body">
                            <blockquote className="blockquote mb-0">
                                <p>A well-known quote, contained hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhin a blockquote element.</p>
                                <footer className="blockquote-footer">
                                    Someone famous in <cite title="Source Title">Source Title</cite>
                                </footer>
                            </blockquote>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}
