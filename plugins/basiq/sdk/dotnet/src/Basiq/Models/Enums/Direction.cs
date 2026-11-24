using System;
using System.Text.Json.Serialization;
using Basiq.Core.Enum;

namespace Basiq.Models.Enums;

/// <summary>
/// Identifies if the transaction is of debit or credit type.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Direction>))]
public sealed record Direction : OpenStringEnum<Direction>
{
    private Direction(string value) : base(value)
    {
    }

    public static readonly Direction Debit = new("debit");

    public static readonly Direction Credit = new("credit");

    public TResult Match<TResult>(Func<TResult> onDebit, Func<TResult> onCredit, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Debit => onDebit(),
            _ when this == Credit => onCredit(),
            _ => otherwise(Value)
        };

    public void Match(Action onDebit, Action onCredit, Action<string> otherwise)
    {
        if (this == Debit) onDebit();
        else if (this == Credit) onCredit();
        else otherwise(Value);
    }
}
