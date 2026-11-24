using System;
using System.Text.Json.Serialization;
using DevCycle.Core.Enum;

namespace DevCycle.Models.Enums;

/// <summary>
/// Type of rollout
/// </summary>
[JsonConverter(typeof(StringEnumConverter<TypeDevCycleManagementDeprecatedFeaturesV1Api>))]
public sealed record TypeDevCycleManagementDeprecatedFeaturesV1Api : OpenStringEnum<TypeDevCycleManagementDeprecatedFeaturesV1Api>
{
    private TypeDevCycleManagementDeprecatedFeaturesV1Api(string value) : base(value)
    {
    }

    public static readonly TypeDevCycleManagementDeprecatedFeaturesV1Api Schedule = new("schedule");

    public static readonly TypeDevCycleManagementDeprecatedFeaturesV1Api Gradual = new("gradual");

    public static readonly TypeDevCycleManagementDeprecatedFeaturesV1Api Stepped = new("stepped");

    public TResult Match<TResult>(Func<TResult> onSchedule,
        Func<TResult> onGradual,
        Func<TResult> onStepped,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Schedule => onSchedule(),
            _ when this == Gradual => onGradual(),
            _ when this == Stepped => onStepped(),
            _ => otherwise(Value)
        };

    public void Match(Action onSchedule, Action onGradual, Action onStepped, Action<string> otherwise)
    {
        if (this == Schedule) onSchedule();
        else if (this == Gradual) onGradual();
        else if (this == Stepped) onStepped();
        else otherwise(Value);
    }
}
