using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Type53>))]
public sealed record Type53 : OpenStringEnum<Type53>
{
    private Type53(string value) : base(value)
    {
    }

    public static readonly Type53 All = new("ALL");

    public static readonly Type53 Debit = new("DEBIT");

    public static readonly Type53 Credit = new("CREDIT");

    public static readonly Type53 Reversal = new("REVERSAL");

    public static readonly Type53 Settlement = new("SETTLEMENT");

    public TResult Match<TResult>(Func<TResult> onAll,
        Func<TResult> onDebit,
        Func<TResult> onCredit,
        Func<TResult> onReversal,
        Func<TResult> onSettlement,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == All => onAll(),
            _ when this == Debit => onDebit(),
            _ when this == Credit => onCredit(),
            _ when this == Reversal => onReversal(),
            _ when this == Settlement => onSettlement(),
            _ => otherwise(Value)
        };

    public void Match(Action onAll,
        Action onDebit,
        Action onCredit,
        Action onReversal,
        Action onSettlement,
        Action<string> otherwise)
    {
        if (this == All) onAll();
        else if (this == Debit) onDebit();
        else if (this == Credit) onCredit();
        else if (this == Reversal) onReversal();
        else if (this == Settlement) onSettlement();
        else otherwise(Value);
    }
}
