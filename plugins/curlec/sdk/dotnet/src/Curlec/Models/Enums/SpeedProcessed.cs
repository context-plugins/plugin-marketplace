using System;
using System.Text.Json.Serialization;
using Curlec.Core.Enum;

namespace Curlec.Models.Enums;

/// <summary>
/// Actual processing mode used.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<SpeedProcessed>))]
public sealed record SpeedProcessed : OpenStringEnum<SpeedProcessed>
{
    private SpeedProcessed(string value) : base(value)
    {
    }

    public static readonly SpeedProcessed Instant = new("instant");

    public static readonly SpeedProcessed Normal = new("normal");

    public TResult Match<TResult>(Func<TResult> onInstant, Func<TResult> onNormal, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Instant => onInstant(),
            _ when this == Normal => onNormal(),
            _ => otherwise(Value)
        };

    public void Match(Action onInstant, Action onNormal, Action<string> otherwise)
    {
        if (this == Instant) onInstant();
        else if (this == Normal) onNormal();
        else otherwise(Value);
    }
}
