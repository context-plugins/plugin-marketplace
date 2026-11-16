using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

/// <summary>
/// Type of <c>Transfer</c>.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Type31>))]
public sealed record Type31 : OpenStringEnum<Type31>
{
    private Type31(string value) : base(value)
    {
    }

    public static readonly Type31 Debit = new("DEBIT");

    public static readonly Type31 Credit = new("CREDIT");

    public static readonly Type31 Reversal = new("REVERSAL");

    public static readonly Type31 Adjustment = new("ADJUSTMENT");

    public static readonly Type31 Dispute = new("DISPUTE");

    public static readonly Type31 Reserve = new("RESERVE");

    public static readonly Type31 Settlement = new("SETTLEMENT");

    public static readonly Type31 Unknown = new("UNKNOWN");

    public TResult Match<TResult>(Func<TResult> onDebit,
        Func<TResult> onCredit,
        Func<TResult> onReversal,
        Func<TResult> onAdjustment,
        Func<TResult> onDispute,
        Func<TResult> onReserve,
        Func<TResult> onSettlement,
        Func<TResult> onUnknown,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Debit => onDebit(),
            _ when this == Credit => onCredit(),
            _ when this == Reversal => onReversal(),
            _ when this == Adjustment => onAdjustment(),
            _ when this == Dispute => onDispute(),
            _ when this == Reserve => onReserve(),
            _ when this == Settlement => onSettlement(),
            _ when this == Unknown => onUnknown(),
            _ => otherwise(Value)
        };

    public void Match(Action onDebit,
        Action onCredit,
        Action onReversal,
        Action onAdjustment,
        Action onDispute,
        Action onReserve,
        Action onSettlement,
        Action onUnknown,
        Action<string> otherwise)
    {
        if (this == Debit) onDebit();
        else if (this == Credit) onCredit();
        else if (this == Reversal) onReversal();
        else if (this == Adjustment) onAdjustment();
        else if (this == Dispute) onDispute();
        else if (this == Reserve) onReserve();
        else if (this == Settlement) onSettlement();
        else if (this == Unknown) onUnknown();
        else otherwise(Value);
    }
}
