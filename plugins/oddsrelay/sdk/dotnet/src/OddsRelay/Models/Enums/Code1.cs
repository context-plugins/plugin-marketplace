using System;
using System.Text.Json.Serialization;
using OddsRelay.Core.Enum;

namespace OddsRelay.Models.Enums;

/// <summary>
/// Stable machine code; branch on this, never on <c>message</c>.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Code1>))]
public sealed record Code1 : OpenStringEnum<Code1>
{
    private Code1(string value) : base(value)
    {
    }

    public static readonly Code1 TemporarilyUnavailable = new("temporarily_unavailable");

    public static readonly Code1 RawNotEnabled = new("raw_not_enabled");

    public TResult Match<TResult>(Func<TResult> onTemporarilyUnavailable,
        Func<TResult> onRawNotEnabled,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == TemporarilyUnavailable => onTemporarilyUnavailable(),
            _ when this == RawNotEnabled => onRawNotEnabled(),
            _ => otherwise(Value)
        };

    public void Match(Action onTemporarilyUnavailable, Action onRawNotEnabled, Action<string> otherwise)
    {
        if (this == TemporarilyUnavailable) onTemporarilyUnavailable();
        else if (this == RawNotEnabled) onRawNotEnabled();
        else otherwise(Value);
    }
}
