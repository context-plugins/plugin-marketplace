using System;
using System.Text.Json.Serialization;
using AgentReady.Core.Enum;

namespace AgentReady.Models.Enums;

/// <summary>
/// Lifecycle state of a scan. Poll until status is 'completed' or 'failed'.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<StatusAgentReadyScansApi>))]
public sealed record StatusAgentReadyScansApi : OpenStringEnum<StatusAgentReadyScansApi>
{
    private StatusAgentReadyScansApi(string value) : base(value)
    {
    }

    public static readonly StatusAgentReadyScansApi Running = new("running");

    public static readonly StatusAgentReadyScansApi Completed = new("completed");

    public static readonly StatusAgentReadyScansApi Failed = new("failed");

    public TResult Match<TResult>(Func<TResult> onRunning,
        Func<TResult> onCompleted,
        Func<TResult> onFailed,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Running => onRunning(),
            _ when this == Completed => onCompleted(),
            _ when this == Failed => onFailed(),
            _ => otherwise(Value)
        };

    public void Match(Action onRunning, Action onCompleted, Action onFailed, Action<string> otherwise)
    {
        if (this == Running) onRunning();
        else if (this == Completed) onCompleted();
        else if (this == Failed) onFailed();
        else otherwise(Value);
    }
}
