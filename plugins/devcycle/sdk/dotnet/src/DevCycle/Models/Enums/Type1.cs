using System;
using System.Text.Json.Serialization;
using DevCycle.Core.Enum;

namespace DevCycle.Models.Enums;

/// <summary>
/// Feature type
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Type1>))]
public sealed record Type1 : OpenStringEnum<Type1>
{
    private Type1(string value) : base(value)
    {
    }

    public static readonly Type1 Release = new("release");

    public static readonly Type1 Experiment = new("experiment");

    public static readonly Type1 Permission = new("permission");

    public static readonly Type1 Ops = new("ops");

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
