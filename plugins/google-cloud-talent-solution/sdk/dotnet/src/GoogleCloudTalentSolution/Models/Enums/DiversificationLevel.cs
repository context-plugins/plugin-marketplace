using System;
using System.Text.Json.Serialization;
using GoogleCloudTalentSolution.Core.Enum;

namespace GoogleCloudTalentSolution.Models.Enums;

/// <summary>
/// Controls whether highly similar jobs are returned next to each other in the search results. Jobs are identified as highly similar based on their titles, job categories, and locations. Highly similar results are clustered so that only one representative job of the cluster is displayed to the job seeker higher up in the results, with the other jobs being displayed lower down in the results. Defaults to DiversificationLevel.SIMPLE if no value is specified.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<DiversificationLevel>))]
public sealed record DiversificationLevel : OpenStringEnum<DiversificationLevel>
{
    private DiversificationLevel(string value) : base(value)
    {
    }

    public static readonly DiversificationLevel DiversificationLevelUnspecified = new(
        "DIVERSIFICATION_LEVEL_UNSPECIFIED");

    public static readonly DiversificationLevel Disabled = new("DISABLED");

    public static readonly DiversificationLevel Simple = new("SIMPLE");

    public static readonly DiversificationLevel OnePerCompany = new("ONE_PER_COMPANY");

    public static readonly DiversificationLevel TwoPerCompany = new("TWO_PER_COMPANY");

    public static readonly DiversificationLevel MaxThreePerCompany = new("MAX_THREE_PER_COMPANY");

    public static readonly DiversificationLevel DiversifyByLooserSimilarity = new("DIVERSIFY_BY_LOOSER_SIMILARITY");

    public TResult Match<TResult>(Func<TResult> onDiversificationLevelUnspecified,
        Func<TResult> onDisabled,
        Func<TResult> onSimple,
        Func<TResult> onOnePerCompany,
        Func<TResult> onTwoPerCompany,
        Func<TResult> onMaxThreePerCompany,
        Func<TResult> onDiversifyByLooserSimilarity,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == DiversificationLevelUnspecified => onDiversificationLevelUnspecified(),
            _ when this == Disabled => onDisabled(),
            _ when this == Simple => onSimple(),
            _ when this == OnePerCompany => onOnePerCompany(),
            _ when this == TwoPerCompany => onTwoPerCompany(),
            _ when this == MaxThreePerCompany => onMaxThreePerCompany(),
            _ when this == DiversifyByLooserSimilarity => onDiversifyByLooserSimilarity(),
            _ => otherwise(Value)
        };

    public void Match(Action onDiversificationLevelUnspecified,
        Action onDisabled,
        Action onSimple,
        Action onOnePerCompany,
        Action onTwoPerCompany,
        Action onMaxThreePerCompany,
        Action onDiversifyByLooserSimilarity,
        Action<string> otherwise)
    {
        if (this == DiversificationLevelUnspecified) onDiversificationLevelUnspecified();
        else if (this == Disabled) onDisabled();
        else if (this == Simple) onSimple();
        else if (this == OnePerCompany) onOnePerCompany();
        else if (this == TwoPerCompany) onTwoPerCompany();
        else if (this == MaxThreePerCompany) onMaxThreePerCompany();
        else if (this == DiversifyByLooserSimilarity) onDiversifyByLooserSimilarity();
        else otherwise(Value);
    }
}
