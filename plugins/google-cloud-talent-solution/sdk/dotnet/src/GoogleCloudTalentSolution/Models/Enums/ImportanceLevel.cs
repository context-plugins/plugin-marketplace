using System;
using System.Text.Json.Serialization;
using GoogleCloudTalentSolution.Core.Enum;

namespace GoogleCloudTalentSolution.Models.Enums;

/// <summary>
/// Required. Controls over how important the score of CustomRankingInfo.ranking_expression gets applied to job's final ranking position. An error is thrown if not specified.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ImportanceLevel>))]
public sealed record ImportanceLevel : OpenStringEnum<ImportanceLevel>
{
    private ImportanceLevel(string value) : base(value)
    {
    }

    public static readonly ImportanceLevel ImportanceLevelUnspecified = new("IMPORTANCE_LEVEL_UNSPECIFIED");

    public static readonly ImportanceLevel None = new("NONE");

    public static readonly ImportanceLevel Low = new("LOW");

    public static readonly ImportanceLevel Mild = new("MILD");

    public static readonly ImportanceLevel Medium = new("MEDIUM");

    public static readonly ImportanceLevel High = new("HIGH");

    public static readonly ImportanceLevel Extreme = new("EXTREME");

    public TResult Match<TResult>(Func<TResult> onImportanceLevelUnspecified,
        Func<TResult> onNone,
        Func<TResult> onLow,
        Func<TResult> onMild,
        Func<TResult> onMedium,
        Func<TResult> onHigh,
        Func<TResult> onExtreme,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == ImportanceLevelUnspecified => onImportanceLevelUnspecified(),
            _ when this == None => onNone(),
            _ when this == Low => onLow(),
            _ when this == Mild => onMild(),
            _ when this == Medium => onMedium(),
            _ when this == High => onHigh(),
            _ when this == Extreme => onExtreme(),
            _ => otherwise(Value)
        };

    public void Match(Action onImportanceLevelUnspecified,
        Action onNone,
        Action onLow,
        Action onMild,
        Action onMedium,
        Action onHigh,
        Action onExtreme,
        Action<string> otherwise)
    {
        if (this == ImportanceLevelUnspecified) onImportanceLevelUnspecified();
        else if (this == None) onNone();
        else if (this == Low) onLow();
        else if (this == Mild) onMild();
        else if (this == Medium) onMedium();
        else if (this == High) onHigh();
        else if (this == Extreme) onExtreme();
        else otherwise(Value);
    }
}
