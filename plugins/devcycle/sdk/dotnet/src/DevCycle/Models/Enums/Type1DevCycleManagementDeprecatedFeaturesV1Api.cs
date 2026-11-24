using System;
using System.Text.Json.Serialization;
using DevCycle.Core.Enum;

namespace DevCycle.Models.Enums;

/// <summary>
/// Defines the transition into this percentage level
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Type1DevCycleManagementDeprecatedFeaturesV1Api>))]
public sealed record Type1DevCycleManagementDeprecatedFeaturesV1Api : OpenStringEnum<Type1DevCycleManagementDeprecatedFeaturesV1Api>
{
    private Type1DevCycleManagementDeprecatedFeaturesV1Api(string value) : base(value)
    {
    }

    public static readonly Type1DevCycleManagementDeprecatedFeaturesV1Api Linear = new("linear");

    public static readonly Type1DevCycleManagementDeprecatedFeaturesV1Api Discrete = new("discrete");

    public TResult Match<TResult>(Func<TResult> onLinear, Func<TResult> onDiscrete, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Linear => onLinear(),
            _ when this == Discrete => onDiscrete(),
            _ => otherwise(Value)
        };

    public void Match(Action onLinear, Action onDiscrete, Action<string> otherwise)
    {
        if (this == Linear) onLinear();
        else if (this == Discrete) onDiscrete();
        else otherwise(Value);
    }
}
