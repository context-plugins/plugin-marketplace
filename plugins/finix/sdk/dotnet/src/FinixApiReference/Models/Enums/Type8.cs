using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

/// <summary>
/// The <c>type</c> will always be <c>TOTAL</c>.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Type8>))]
public sealed record Type8 : OpenStringEnum<Type8>
{
    private Type8(string value) : base(value)
    {
    }

    public static readonly Type8 Total = new("TOTAL");

    public TResult Match<TResult>(Func<TResult> onTotal, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Total => onTotal(),
            _ => otherwise(Value)
        };

    public void Match(Action onTotal, Action<string> otherwise)
    {
        if (this == Total) onTotal();
        else otherwise(Value);
    }
}
