using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

/// <summary>
/// The identity type.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Type11>))]
public sealed record Type11 : OpenStringEnum<Type11>
{
    private Type11(string value) : base(value)
    {
    }

    public static readonly Type11 Business = new("BUSINESS");

    public TResult Match<TResult>(Func<TResult> onBusiness, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Business => onBusiness(),
            _ => otherwise(Value)
        };

    public void Match(Action onBusiness, Action<string> otherwise)
    {
        if (this == Business) onBusiness();
        else otherwise(Value);
    }
}
