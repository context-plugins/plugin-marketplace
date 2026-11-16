using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

/// <summary>
/// The <c>Identity</c> type.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Type10>))]
public sealed record Type10 : OpenStringEnum<Type10>
{
    private Type10(string value) : base(value)
    {
    }

    public static readonly Type10 Personal = new("PERSONAL");

    public static readonly Type10 Business = new("BUSINESS");

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
