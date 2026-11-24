using System;
using System.Text.Json.Serialization;
using CompSniper.Core.Enum;

namespace CompSniper.Models.Enums;

/// <summary>
/// compact also returns compact sold-listing rows, including bestOfferAccepted, and is limited to 25 cards with count &lt;= 60.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<OutputMode>))]
public sealed record OutputMode : OpenStringEnum<OutputMode>
{
    private OutputMode(string value) : base(value)
    {
    }

    public static readonly OutputMode Summary = new("summary");

    public static readonly OutputMode Compact = new("compact");

    public TResult Match<TResult>(Func<TResult> onSummary, Func<TResult> onCompact, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Summary => onSummary(),
            _ when this == Compact => onCompact(),
            _ => otherwise(Value)
        };

    public void Match(Action onSummary, Action onCompact, Action<string> otherwise)
    {
        if (this == Summary) onSummary();
        else if (this == Compact) onCompact();
        else otherwise(Value);
    }
}
