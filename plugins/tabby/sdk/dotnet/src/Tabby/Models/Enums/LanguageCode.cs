using System;
using System.Text.Json.Serialization;
using Tabby.Core.Enum;

namespace Tabby.Models.Enums;

/// <summary>
/// Session language, used to launch HPP with desired language.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<LanguageCode>))]
public sealed record LanguageCode : OpenStringEnum<LanguageCode>
{
    private LanguageCode(string value) : base(value)
    {
    }

    public static readonly LanguageCode Ar = new("ar");

    public static readonly LanguageCode En = new("en");

    public TResult Match<TResult>(Func<TResult> onAr, Func<TResult> onEn, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Ar => onAr(),
            _ when this == En => onEn(),
            _ => otherwise(Value)
        };

    public void Match(Action onAr, Action onEn, Action<string> otherwise)
    {
        if (this == Ar) onAr();
        else if (this == En) onEn();
        else otherwise(Value);
    }
}
