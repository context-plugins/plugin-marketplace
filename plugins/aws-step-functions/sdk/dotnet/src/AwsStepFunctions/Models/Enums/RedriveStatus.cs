using System;
using System.Text.Json.Serialization;
using AwsStepFunctions.Core.Enum;

namespace AwsStepFunctions.Models.Enums;

/// <summary>
/// Indicates whether or not an execution can be redriven at a given point in time. For executions of type STANDARD, redriveStatus is NOT_REDRIVABLE if calling the RedriveExecution API action would return the ExecutionNotRedrivable error. For a Distributed Map that includes child workflows of type STANDARD, redriveStatus indicates whether or not the Map Run can redrive child workflow executions. For a Distributed Map that includes child workflows of type EXPRESS, redriveStatus indicates whether or not the Map Run can redrive child workflow executions. You can redrive failed or timed out EXPRESS wo
/// </summary>
[JsonConverter(typeof(StringEnumConverter<RedriveStatus>))]
public sealed record RedriveStatus : OpenStringEnum<RedriveStatus>
{
    private RedriveStatus(string value) : base(value)
    {
    }

    public static readonly RedriveStatus Redrivable = new("REDRIVABLE");

    public static readonly RedriveStatus NotRedrivable = new("NOT_REDRIVABLE");

    public static readonly RedriveStatus RedrivableByMapRun = new("REDRIVABLE_BY_MAP_RUN");

    public TResult Match<TResult>(Func<TResult> onRedrivable,
        Func<TResult> onNotRedrivable,
        Func<TResult> onRedrivableByMapRun,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Redrivable => onRedrivable(),
            _ when this == NotRedrivable => onNotRedrivable(),
            _ when this == RedrivableByMapRun => onRedrivableByMapRun(),
            _ => otherwise(Value)
        };

    public void Match(Action onRedrivable,
        Action onNotRedrivable,
        Action onRedrivableByMapRun,
        Action<string> otherwise)
    {
        if (this == Redrivable) onRedrivable();
        else if (this == NotRedrivable) onNotRedrivable();
        else if (this == RedrivableByMapRun) onRedrivableByMapRun();
        else otherwise(Value);
    }
}
