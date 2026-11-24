using System;
using System.Text.Json.Serialization;
using Basiq.Core.Enum;

namespace Basiq.Models.Enums;

/// <summary>
/// Type of insight returned
/// </summary>
[JsonConverter(typeof(StringEnumConverter<InsightType>))]
public sealed record InsightType : OpenStringEnum<InsightType>
{
    private InsightType(string value) : base(value)
    {
    }

    public static readonly InsightType ExpenseRatio = new("expense-ratio");

    public static readonly InsightType Balance = new("balance");

    public static readonly InsightType Account = new("account");

    public static readonly InsightType Identity = new("identity");

    public static readonly InsightType Income = new("income");

    public TResult Match<TResult>(Func<TResult> onExpenseRatio,
        Func<TResult> onBalance,
        Func<TResult> onAccount,
        Func<TResult> onIdentity,
        Func<TResult> onIncome,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == ExpenseRatio => onExpenseRatio(),
            _ when this == Balance => onBalance(),
            _ when this == Account => onAccount(),
            _ when this == Identity => onIdentity(),
            _ when this == Income => onIncome(),
            _ => otherwise(Value)
        };

    public void Match(Action onExpenseRatio,
        Action onBalance,
        Action onAccount,
        Action onIdentity,
        Action onIncome,
        Action<string> otherwise)
    {
        if (this == ExpenseRatio) onExpenseRatio();
        else if (this == Balance) onBalance();
        else if (this == Account) onAccount();
        else if (this == Identity) onIdentity();
        else if (this == Income) onIncome();
        else otherwise(Value);
    }
}
