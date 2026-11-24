using System;
using System.Text.Json.Serialization;
using DevCycle.Core.Enum;

namespace DevCycle.Models.Enums;

/// <summary>
/// The Feature type
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Type3DevCycleManagementDeprecatedFeaturesV1Api>))]
public sealed record Type3DevCycleManagementDeprecatedFeaturesV1Api : OpenStringEnum<Type3DevCycleManagementDeprecatedFeaturesV1Api>
{
    private Type3DevCycleManagementDeprecatedFeaturesV1Api(string value) : base(value)
    {
    }

    public static readonly Type3DevCycleManagementDeprecatedFeaturesV1Api Release = new("release");

    public static readonly Type3DevCycleManagementDeprecatedFeaturesV1Api Experiment = new("experiment");

    public static readonly Type3DevCycleManagementDeprecatedFeaturesV1Api Permission = new("permission");

    public static readonly Type3DevCycleManagementDeprecatedFeaturesV1Api Ops = new("ops");

    public TResult Match<TResult>(Func<TResult> onRelease,
        Func<TResult> onExperiment,
        Func<TResult> onPermission,
        Func<TResult> onOps,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Release => onRelease(),
            _ when this == Experiment => onExperiment(),
            _ when this == Permission => onPermission(),
            _ when this == Ops => onOps(),
            _ => otherwise(Value)
        };

    public void Match(Action onRelease,
        Action onExperiment,
        Action onPermission,
        Action onOps,
        Action<string> otherwise)
    {
        if (this == Release) onRelease();
        else if (this == Experiment) onExperiment();
        else if (this == Permission) onPermission();
        else if (this == Ops) onOps();
        else otherwise(Value);
    }
}
