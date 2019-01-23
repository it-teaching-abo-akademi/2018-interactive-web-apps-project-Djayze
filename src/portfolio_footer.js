import React from 'react';

export default class PortfolioFooter extends React.Component
{
    render()
    {
        return (
            <div>
                <button onClick={this.onGetGraphClick.bind(this)} id='graph_click'>Perf Graph</button>
                <button onClick={this.onDeletePortfolioClick.bind(this)} id='delete_protfolio'>Remove selected</button>
            </div>
        );
    }
    onDeletePortfolioClick()
    {
        const portfolioName = this.props.name;
        this.props.deletePortfolio(portfolioName)
    }
    onGetGraphClick()
    {
        const portfolioName = this.props.name;
        document.getElementById('perf_graph').style.display = 'block';
        document.getElementById('original_body').style.opacity = 0.4;
        this.props.getStockList(portfolioName);
    }
}