using System;
using System.Text.Json.Serialization;
using Basiq.Core.Enum;

namespace Basiq.Models.Enums;

/// <summary>
/// Describes the class(type) of transaction.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Class1ReportingReportsApi>))]
public sealed record Class1ReportingReportsApi : OpenStringEnum<Class1ReportingReportsApi>
{
    private Class1ReportingReportsApi(string value) : base(value)
    {
    }

    public static readonly Class1ReportingReportsApi BankFee = new("bank-fee");

    public static readonly Class1ReportingReportsApi Payment = new("payment");

    public static readonly Class1ReportingReportsApi CashWithdrawal = new("cash-withdrawal");

    public static readonly Class1ReportingReportsApi Transfer = new("transfer");

    public static readonly Class1ReportingReportsApi LoanInterest = new("loan-interest");

    public static readonly Class1ReportingReportsApi Refund = new("refund");

    public static readonly Class1ReportingReportsApi DirectCredit = new("direct-credit");

    public static readonly Class1ReportingReportsApi Interest = new("interest");

    public static readonly Class1ReportingReportsApi LoanRepayment = new("loan-repayment");

    public TResult Match<TResult>(Func<TResult> onBankFee,
        Func<TResult> onPayment,
        Func<TResult> onCashWithdrawal,
        Func<TResult> onTransfer,
        Func<TResult> onLoanInterest,
        Func<TResult> onRefund,
        Func<TResult> onDirectCredit,
        Func<TResult> onInterest,
        Func<TResult> onLoanRepayment,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == BankFee => onBankFee(),
            _ when this == Payment => onPayment(),
            _ when this == CashWithdrawal => onCashWithdrawal(),
            _ when this == Transfer => onTransfer(),
            _ when this == LoanInterest => onLoanInterest(),
            _ when this == Refund => onRefund(),
            _ when this == DirectCredit => onDirectCredit(),
            _ when this == Interest => onInterest(),
            _ when this == LoanRepayment => onLoanRepayment(),
            _ => otherwise(Value)
        };

    public void Match(Action onBankFee,
        Action onPayment,
        Action onCashWithdrawal,
        Action onTransfer,
        Action onLoanInterest,
        Action onRefund,
        Action onDirectCredit,
        Action onInterest,
        Action onLoanRepayment,
        Action<string> otherwise)
    {
        if (this == BankFee) onBankFee();
        else if (this == Payment) onPayment();
        else if (this == CashWithdrawal) onCashWithdrawal();
        else if (this == Transfer) onTransfer();
        else if (this == LoanInterest) onLoanInterest();
        else if (this == Refund) onRefund();
        else if (this == DirectCredit) onDirectCredit();
        else if (this == Interest) onInterest();
        else if (this == LoanRepayment) onLoanRepayment();
        else otherwise(Value);
    }
}
