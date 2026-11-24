using System;
using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Enum;

namespace GoogleCloudDataproc.Models.Enums;

/// <summary>
/// Output only. The migration plan action for the database.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<PlanAction>))]
public sealed record PlanAction : OpenStringEnum<PlanAction>
{
    private PlanAction(string value) : base(value)
    {
    }

    public static readonly PlanAction ActionUnspecified = new("ACTION_UNSPECIFIED");

    public static readonly PlanAction Create = new("CREATE");

    public static readonly PlanAction Update = new("UPDATE");

    public static readonly PlanAction Skip = new("SKIP");

    public static readonly PlanAction DependencyFailure = new("DEPENDENCY_FAILURE");

    public static readonly PlanAction Error = new("ERROR");

    public TResult Match<TResult>(Func<TResult> onActionUnspecified,
        Func<TResult> onCreate,
        Func<TResult> onUpdate,
        Func<TResult> onSkip,
        Func<TResult> onDependencyFailure,
        Func<TResult> onError,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == ActionUnspecified => onActionUnspecified(),
            _ when this == Create => onCreate(),
            _ when this == Update => onUpdate(),
            _ when this == Skip => onSkip(),
            _ when this == DependencyFailure => onDependencyFailure(),
            _ when this == Error => onError(),
            _ => otherwise(Value)
        };

    public void Match(Action onActionUnspecified,
        Action onCreate,
        Action onUpdate,
        Action onSkip,
        Action onDependencyFailure,
        Action onError,
        Action<string> otherwise)
    {
        if (this == ActionUnspecified) onActionUnspecified();
        else if (this == Create) onCreate();
        else if (this == Update) onUpdate();
        else if (this == Skip) onSkip();
        else if (this == DependencyFailure) onDependencyFailure();
        else if (this == Error) onError();
        else otherwise(Value);
    }
}
