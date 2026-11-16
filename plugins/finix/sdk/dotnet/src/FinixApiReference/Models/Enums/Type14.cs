using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

/// <summary>
/// The identity type.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Type14>))]
public sealed record Type14 : OpenStringEnum<Type14>
{
    private Type14(string value) : base(value)
    {
    }

    public static readonly Type14 Personal = new("PERSONAL");

    public TResult Match<TResult>(Func<TResult> onPersonal, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Personal => onPersonal(),
            _ => otherwise(Value)
        };

    public void Match(Action onPersonal, Action<string> otherwise)
    {
        if (this == Personal) onPersonal();
        else otherwise(Value);
    }
}
