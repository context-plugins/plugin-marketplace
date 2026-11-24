using System;
using System.Text.Json.Serialization;
using DevCycle.Core.Enum;

namespace DevCycle.Models.Enums;

/// <summary>
/// An OpenFeature reason for the evaluation
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ReasonDevCycleBucketingOpenFeatureRemoteEvaluationApi>))]
public sealed record ReasonDevCycleBucketingOpenFeatureRemoteEvaluationApi : OpenStringEnum<ReasonDevCycleBucketingOpenFeatureRemoteEvaluationApi>
{
    private ReasonDevCycleBucketingOpenFeatureRemoteEvaluationApi(string value) : base(value)
    {
    }

    public static readonly ReasonDevCycleBucketingOpenFeatureRemoteEvaluationApi Static = new("STATIC");

    public static readonly ReasonDevCycleBucketingOpenFeatureRemoteEvaluationApi TargetingMatch = new(
        "TARGETING_MATCH");

    public static readonly ReasonDevCycleBucketingOpenFeatureRemoteEvaluationApi Split = new("SPLIT");

    public static readonly ReasonDevCycleBucketingOpenFeatureRemoteEvaluationApi Disabled = new("DISABLED");

    public static readonly ReasonDevCycleBucketingOpenFeatureRemoteEvaluationApi Unknown = new("UNKNOWN");

    public TResult Match<TResult>(Func<TResult> onStatic,
        Func<TResult> onTargetingMatch,
        Func<TResult> onSplit,
        Func<TResult> onDisabled,
        Func<TResult> onUnknown,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Static => onStatic(),
            _ when this == TargetingMatch => onTargetingMatch(),
            _ when this == Split => onSplit(),
            _ when this == Disabled => onDisabled(),
            _ when this == Unknown => onUnknown(),
            _ => otherwise(Value)
        };

    public void Match(Action onStatic,
        Action onTargetingMatch,
        Action onSplit,
        Action onDisabled,
        Action onUnknown,
        Action<string> otherwise)
    {
        if (this == Static) onStatic();
        else if (this == TargetingMatch) onTargetingMatch();
        else if (this == Split) onSplit();
        else if (this == Disabled) onDisabled();
        else if (this == Unknown) onUnknown();
        else otherwise(Value);
    }
}
