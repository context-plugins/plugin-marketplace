using System;
using System.Text.Json.Serialization;
using PlinthUsGrantsData.Core.Enum;

namespace PlinthUsGrantsData.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Severity>))]
public sealed record Severity : OpenStringEnum<Severity>
{
    private Severity(string value) : base(value)
    {
    }

    public static readonly Severity Unsupported = new("unsupported");

    public static readonly Severity Caveat = new("caveat");

    public TResult Match<TResult>(Func<TResult> onUnsupported,
        Func<TResult> onCaveat,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Unsupported => onUnsupported(),
            _ when this == Caveat => onCaveat(),
            _ => otherwise(Value)
        };

    public void Match(Action onUnsupported, Action onCaveat, Action<string> otherwise)
    {
        if (this == Unsupported) onUnsupported();
        else if (this == Caveat) onCaveat();
        else otherwise(Value);
    }
}
