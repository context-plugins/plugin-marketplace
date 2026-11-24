using System;
using System.Text.Json.Serialization;
using DevCycle.Core.Enum;

namespace DevCycle.Models.Enums;

/// <summary>
/// The Feature type
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Type2DevCycleManagementMetricAssociationsApi>))]
public sealed record Type2DevCycleManagementMetricAssociationsApi : OpenStringEnum<Type2DevCycleManagementMetricAssociationsApi>
{
    private Type2DevCycleManagementMetricAssociationsApi(string value) : base(value)
    {
    }

    public static readonly Type2DevCycleManagementMetricAssociationsApi Release = new("release");

    public static readonly Type2DevCycleManagementMetricAssociationsApi Experiment = new("experiment");

    public static readonly Type2DevCycleManagementMetricAssociationsApi Permission = new("permission");

    public static readonly Type2DevCycleManagementMetricAssociationsApi Ops = new("ops");

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
