using System;
using System.Text.Json.Serialization;
using UiPath.Core.Enum;

namespace UiPath.Models.Enums;

/// <summary>
/// Strategy for allocating robots to the job
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Strategy>))]
public sealed record Strategy : OpenStringEnum<Strategy>
{
    private Strategy(string value) : base(value)
    {
    }

    public static readonly Strategy All = new("All");

    public static readonly Strategy Specific = new("Specific");

    public static readonly Strategy JobsCount = new("JobsCount");

    public static readonly Strategy RobotIds = new("RobotIds");

    public TResult Match<TResult>(Func<TResult> onAll,
        Func<TResult> onSpecific,
        Func<TResult> onJobsCount,
        Func<TResult> onRobotIds,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == All => onAll(),
            _ when this == Specific => onSpecific(),
            _ when this == JobsCount => onJobsCount(),
            _ when this == RobotIds => onRobotIds(),
            _ => otherwise(Value)
        };

    public void Match(Action onAll, Action onSpecific, Action onJobsCount, Action onRobotIds, Action<string> otherwise)
    {
        if (this == All) onAll();
        else if (this == Specific) onSpecific();
        else if (this == JobsCount) onJobsCount();
        else if (this == RobotIds) onRobotIds();
        else otherwise(Value);
    }
}
