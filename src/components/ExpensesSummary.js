import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = ({ expenseCount, expensesTotal, hiddenCount }) => {
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses' ;
    const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00');
    const expensesOff = hiddenCount === 1 ? 'expense' : 'expenses' ;

    return (
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">Viewing <span className="">{expenseCount}</span> {expenseWord} totalling <span className="">{formattedExpensesTotal}</span></h1>
                <div className="page-header__actions">
                    <div>
                        {hiddenCount > 0 ? (<h3 className="page-header__title">Not view <span className="">{hiddenCount}</span> {expensesOff} because of Filters.</h3>) : ''}
                    </div>
                    <Link className="button" to="/create">Add Expense</Link>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);

    return {
        expenseCount: visibleExpenses.length,
        expensesTotal: selectExpensesTotal(visibleExpenses),
        hiddenCount: (state.expenses.length - visibleExpenses.length)
    };
};

export default connect(mapStateToProps)(ExpensesSummary);