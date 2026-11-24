using System;
using System.Text.Json.Serialization;
using Basiq.Core.Enum;

namespace Basiq.Models.Enums;

/// <summary>
/// Unique identifier for the Insight type. Maps to the <c>insightType</c> values used by existing Insight endpoints: <c>account</c>, <c>balance</c>, <c>identity</c>, <c>income</c>, <c>expense-ratio</c>.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Id>))]
public sealed record Id : OpenStringEnum<Id>
{
    private Id(string value) : base(value)
    {
    }

    public static readonly Id AccountVerification = new("ACCOUNT_VERIFICATION");

    public static readonly Id BalanceVerification = new("BALANCE_VERIFICATION");

    public static readonly Id IdentityVerification = new("IDENTITY_VERIFICATION");

    public static readonly Id IncomeVerification = new("INCOME_VERIFICATION");

    public static readonly Id ExpenseRatioVerification = new("EXPENSE_RATIO_VERIFICATION");

    public TResult Match<TResult>(Func<TResult> onAccountVerification,
        Func<TResult> onBalanceVerification,
        Func<TResult> onIdentityVerification,
        Func<TResult> onIncomeVerification,
        Func<TResult> onExpenseRatioVerification,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AccountVerification => onAccountVerification(),
            _ when this == BalanceVerification => onBalanceVerification(),
            _ when this == IdentityVerification => onIdentityVerification(),
            _ when this == IncomeVerification => onIncomeVerification(),
            _ when this == ExpenseRatioVerification => onExpenseRatioVerification(),
            _ => otherwise(Value)
        };

    public void Match(Action onAccountVerification,
        Action onBalanceVerification,
        Action onIdentityVerification,
        Action onIncomeVerification,
        Action onExpenseRatioVerification,
        Action<string> otherwise)
    {
        if (this == AccountVerification) onAccountVerification();
        else if (this == BalanceVerification) onBalanceVerification();
        else if (this == IdentityVerification) onIdentityVerification();
        else if (this == IncomeVerification) onIncomeVerification();
        else if (this == ExpenseRatioVerification) onExpenseRatioVerification();
        else otherwise(Value);
    }
}
