using System;
using System.Text.Json.Serialization;
using GoogleCloudTalentSolution.Core.Enum;

namespace GoogleCloudTalentSolution.Models.Enums;

/// <summary>
/// Optional. The relevance threshold of the search results. Default to Google defined threshold, leveraging a balance of precision and recall to deliver both highly accurate results and comprehensive coverage of relevant information.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<RelevanceThreshold>))]
public sealed record RelevanceThreshold : OpenStringEnum<RelevanceThreshold>
{
    private RelevanceThreshold(string value) : base(value)
    {
    }

    public static readonly RelevanceThreshold RelevanceThresholdUnspecified = new("RELEVANCE_THRESHOLD_UNSPECIFIED");

    public static readonly RelevanceThreshold Lowest = new("LOWEST");

    public static readonly RelevanceThreshold Low = new("LOW");

    public static readonly RelevanceThreshold Medium = new("MEDIUM");

    public static readonly RelevanceThreshold High = new("HIGH");

    public TResult Match<TResult>(Func<TResult> onRelevanceThresholdUnspecified,
        Func<TResult> onLowest,
        Func<TResult> onLow,
        Func<TResult> onMedium,
        Func<TResult> onHigh,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == RelevanceThresholdUnspecified => onRelevanceThresholdUnspecified(),
            _ when this == Lowest => onLowest(),
            _ when this == Low => onLow(),
            _ when this == Medium => onMedium(),
            _ when this == High => onHigh(),
            _ => otherwise(Value)
        };

    public void Match(Action onRelevanceThresholdUnspecified,
        Action onLowest,
        Action onLow,
        Action onMedium,
        Action onHigh,
        Action<string> otherwise)
    {
        if (this == RelevanceThresholdUnspecified) onRelevanceThresholdUnspecified();
        else if (this == Lowest) onLowest();
        else if (this == Low) onLow();
        else if (this == Medium) onMedium();
        else if (this == High) onHigh();
        else otherwise(Value);
    }
}
