using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

/// <summary>
/// Type of <c>Transfer</c>.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Type36>))]
public sealed record Type36 : OpenStringEnum<Type36>
{
    private Type36(string value) : base(value)
    {
    }

    public static readonly Type36 Debit = new("DEBIT");

    public static readonly Type36 Credit = new("CREDIT");

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
