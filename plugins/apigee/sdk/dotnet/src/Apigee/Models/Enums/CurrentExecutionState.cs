using System;
using System.Text.Json.Serialization;
using Apigee.Core.Enum;

namespace Apigee.Models.Enums;

/// <summary>
/// Output only. The current state of the execution.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<CurrentExecutionState>))]
public sealed record CurrentExecutionState : OpenStringEnum<CurrentExecutionState>
{
    private CurrentExecutionState(string value) : base(value)
    {
    }

    public static readonly CurrentExecutionState CurrentExecutionStateUnspecified = new(
        "CURRENT_EXECUTION_STATE_UNSPECIFIED");

    public static readonly CurrentExecutionState Running = new("RUNNING");

    public static readonly CurrentExecutionState NotRunning = new("NOT_RUNNING");

    public TResult Match<TResult>(Func<TResult> onCurrentExecutionStateUnspecified,
        Func<TResult> onRunning,
        Func<TResult> onNotRunning,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == CurrentExecutionStateUnspecified => onCurrentExecutionStateUnspecified(),
            _ when this == Running => onRunning(),
            _ when this == NotRunning => onNotRunning(),
            _ => otherwise(Value)
        };

    public void Match(Action onCurrentExecutionStateUnspecified,
        Action onRunning,
        Action onNotRunning,
        Action<string> otherwise)
    {
        if (this == CurrentExecutionStateUnspecified) onCurrentExecutionStateUnspecified();
        else if (this == Running) onRunning();
        else if (this == NotRunning) onNotRunning();
        else otherwise(Value);
    }
}
