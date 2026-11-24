using System;
using System.Text.Json.Serialization;
using Compabase.Core.Enum;

namespace Compabase.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Locale>))]
public sealed record Locale : OpenStringEnum<Locale>
{
    private Locale(string value) : base(value)
    {
    }

    public static readonly Locale Pl = new("pl");

    public static readonly Locale En = new("en");

    public static readonly Locale De = new("de");

    public TResult Match<TResult>(Func<TResult> onPl,
        Func<TResult> onEn,
        Func<TResult> onDe,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Pl => onPl(),
            _ when this == En => onEn(),
            _ when this == De => onDe(),
            _ => otherwise(Value)
        };

    public void Match(Action onPl, Action onEn, Action onDe, Action<string> otherwise)
    {
        if (this == Pl) onPl();
        else if (this == En) onEn();
        else if (this == De) onDe();
        else otherwise(Value);
    }
}
