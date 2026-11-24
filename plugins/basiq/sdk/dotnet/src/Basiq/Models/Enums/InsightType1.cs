using System;
using System.Text.Json.Serialization;
using Basiq.Core.Enum;

namespace Basiq.Models.Enums;

/// <summary>
/// Type of insight: account verification, balance verification, identity verification, income verification, or expense-ratio
/// </summary>
[JsonConverter(typeof(StringEnumConverter<InsightType1>))]
public sealed record InsightType1 : OpenStringEnum<InsightType1>
{
    private InsightType1(string value) : base(value)
    {
    }

    public static readonly InsightType1 Account = new("account");

    public static readonly InsightType1 Balance = new("balance");

    public static readonly InsightType1 Identity = new("identity");

    public static readonly InsightType1 Income = new("income");

    public static readonly InsightType1 ExpenseRatio = new("expense-ratio");

    public TResult Match<TResult>(Func<TResult> onAccount,
        Func<TResult> onBalance,
        Func<TResult> onIdentity,
        Func<TResult> onIncome,
        Func<TResult> onExpenseRatio,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Account => onAccount(),
            _ when this == Balance => onBalance(),
            _ when this == Identity => onIdentity(),
            _ when this == Income => onIncome(),
            _ when this == ExpenseRatio => onExpenseRatio(),
            _ => otherwise(Value)
        };

    public void Match(Action onAccount,
        Action onBalance,
        Action onIdentity,
        Action onIncome,
        Action onExpenseRatio,
        Action<string> otherwise)
    {
        if (this == Account) onAccount();
        else if (this == Balance) onBalance();
        else if (this == Identity) onIdentity();
        else if (this == Income) onIncome();
        else if (this == ExpenseRatio) onExpenseRatio();
        else otherwise(Value);
    }
}
