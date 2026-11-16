using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

/// <summary>
/// Whether the recipient is considered "PERSONAL" or a "BUSINESS".
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Type39>))]
public sealed record Type39 : OpenStringEnum<Type39>
{
    private Type39(string value) : base(value)
    {
    }

    public static readonly Type39 Personal = new("PERSONAL");

    public static readonly Type39 Business = new("BUSINESS");

    public TResult Match<TResult>(Func<TResult> onPersonal,
        Func<TResult> onBusiness,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Personal => onPersonal(),
            _ when this == Business => onBusiness(),
            _ => otherwise(Value)
        };

    public void Match(Action onPersonal, Action onBusiness, Action<string> otherwise)
    {
        if (this == Personal) onPersonal();
        else if (this == Business) onBusiness();
        else otherwise(Value);
    }
}
