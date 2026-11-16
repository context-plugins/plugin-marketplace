using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

/// <summary>
/// Type of <c>Transfer</c>.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Type40>))]
public sealed record Type40 : OpenStringEnum<Type40>
{
    private Type40(string value) : base(value)
    {
    }

    public static readonly Type40 Credit = new("CREDIT");

    public TResult Match<TResult>(Func<TResult> onCredit, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Credit => onCredit(),
            _ => otherwise(Value)
        };

    public void Match(Action onCredit, Action<string> otherwise)
    {
        if (this == Credit) onCredit();
        else otherwise(Value);
    }
}
