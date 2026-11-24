using System;
using System.Text.Json.Serialization;
using Apigee.Core.Enum;

namespace Apigee.Models.Enums;

/// <summary>
/// Output only. The last execution state of the curation.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<LastExecutionState>))]
public sealed record LastExecutionState : OpenStringEnum<LastExecutionState>
{
    private LastExecutionState(string value) : base(value)
    {
    }

    public static readonly LastExecutionState LastExecutionStateUnspecified = new("LAST_EXECUTION_STATE_UNSPECIFIED");

    public static readonly LastExecutionState Succeeded = new("SUCCEEDED");

    public static readonly LastExecutionState Failed = new("FAILED");

    public TResult Match<TResult>(Func<TResult> onLastExecutionStateUnspecified,
        Func<TResult> onSucceeded,
        Func<TResult> onFailed,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == LastExecutionStateUnspecified => onLastExecutionStateUnspecified(),
            _ when this == Succeeded => onSucceeded(),
            _ when this == Failed => onFailed(),
            _ => otherwise(Value)
        };

    public void Match(Action onLastExecutionStateUnspecified,
        Action onSucceeded,
        Action onFailed,
        Action<string> otherwise)
    {
        if (this == LastExecutionStateUnspecified) onLastExecutionStateUnspecified();
        else if (this == Succeeded) onSucceeded();
        else if (this == Failed) onFailed();
        else otherwise(Value);
    }
}
