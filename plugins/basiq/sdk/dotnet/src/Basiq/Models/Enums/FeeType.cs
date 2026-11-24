using System;
using System.Text.Json.Serialization;
using Basiq.Core.Enum;

namespace Basiq.Models.Enums;

/// <summary>
/// (mandatory) - The type of fee.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<FeeType>))]
public sealed record FeeType : OpenStringEnum<FeeType>
{
    private FeeType(string value) : base(value)
    {
    }

    public static readonly FeeType Deposit = new("DEPOSIT");

    public static readonly FeeType Event = new("EVENT");

    public static readonly FeeType Exit = new("EXIT");

    public static readonly FeeType Payment = new("PAYMENT");

    public static readonly FeeType Periodic = new("PERIODIC");

    public static readonly FeeType Purchase = new("PURCHASE");

    public static readonly FeeType Transaction = new("TRANSACTION");

    public static readonly FeeType Upfront = new("UPFRONT");

    public static readonly FeeType Variable = new("VARIABLE");

    public static readonly FeeType Withdrawal = new("WITHDRAWAL");

    public TResult Match<TResult>(Func<TResult> onDeposit,
        Func<TResult> onEvent,
        Func<TResult> onExit,
        Func<TResult> onPayment,
        Func<TResult> onPeriodic,
        Func<TResult> onPurchase,
        Func<TResult> onTransaction,
        Func<TResult> onUpfront,
        Func<TResult> onVariable,
        Func<TResult> onWithdrawal,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Deposit => onDeposit(),
            _ when this == Event => onEvent(),
            _ when this == Exit => onExit(),
            _ when this == Payment => onPayment(),
            _ when this == Periodic => onPeriodic(),
            _ when this == Purchase => onPurchase(),
            _ when this == Transaction => onTransaction(),
            _ when this == Upfront => onUpfront(),
            _ when this == Variable => onVariable(),
            _ when this == Withdrawal => onWithdrawal(),
            _ => otherwise(Value)
        };

    public void Match(Action onDeposit,
        Action onEvent,
        Action onExit,
        Action onPayment,
        Action onPeriodic,
        Action onPurchase,
        Action onTransaction,
        Action onUpfront,
        Action onVariable,
        Action onWithdrawal,
        Action<string> otherwise)
    {
        if (this == Deposit) onDeposit();
        else if (this == Event) onEvent();
        else if (this == Exit) onExit();
        else if (this == Payment) onPayment();
        else if (this == Periodic) onPeriodic();
        else if (this == Purchase) onPurchase();
        else if (this == Transaction) onTransaction();
        else if (this == Upfront) onUpfront();
        else if (this == Variable) onVariable();
        else if (this == Withdrawal) onWithdrawal();
        else otherwise(Value);
    }
}
