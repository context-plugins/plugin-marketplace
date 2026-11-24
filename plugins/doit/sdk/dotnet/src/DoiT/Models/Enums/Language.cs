using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

/// <summary>
/// The user's preferred language.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Language>))]
public sealed record Language : OpenStringEnum<Language>
{
    private Language(string value) : base(value)
    {
    }

    public static readonly Language En = new("en");

    public static readonly Language Ja = new("ja");

    public TResult Match<TResult>(Func<TResult> onEn, Func<TResult> onJa, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == En => onEn(),
            _ when this == Ja => onJa(),
            _ => otherwise(Value)
        };

    public void Match(Action onEn, Action onJa, Action<string> otherwise)
    {
        if (this == En) onEn();
        else if (this == Ja) onJa();
        else otherwise(Value);
    }
}
