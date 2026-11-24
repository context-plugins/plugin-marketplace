using System;
using System.Text.Json.Serialization;
using OddsRelay.Core.Enum;

namespace OddsRelay.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Format>))]
public sealed record Format : OpenStringEnum<Format>
{
    private Format(string value) : base(value)
    {
    }

    public static readonly Format Envelope = new("envelope");

    public static readonly Format Bare = new("bare");

    public TResult Match<TResult>(Func<TResult> onEnvelope, Func<TResult> onBare, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Envelope => onEnvelope(),
            _ when this == Bare => onBare(),
            _ => otherwise(Value)
        };

    public void Match(Action onEnvelope, Action onBare, Action<string> otherwise)
    {
        if (this == Envelope) onEnvelope();
        else if (this == Bare) onBare();
        else otherwise(Value);
    }
}
