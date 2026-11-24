using System;
using System.Text.Json.Serialization;
using GoogleCloudTasks.Core.Enum;

namespace GoogleCloudTasks.Models.Enums;

/// <summary>
/// Output only. The state of the queue. <c>state</c> can only be changed by calling PauseQueue, ResumeQueue, or uploading <see href="https://cloud.google.com/appengine/docs/python/config/queueref">queue.yaml/xml</see>. UpdateQueue cannot be used to change <c>state</c>.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<State>))]
public sealed record State : OpenStringEnum<State>
{
    private State(string value) : base(value)
    {
    }

    public static readonly State StateUnspecified = new("STATE_UNSPECIFIED");

    public static readonly State Running = new("RUNNING");

    public static readonly State Paused = new("PAUSED");

    public static readonly State Disabled = new("DISABLED");

    public TResult Match<TResult>(Func<TResult> onStateUnspecified,
        Func<TResult> onRunning,
        Func<TResult> onPaused,
        Func<TResult> onDisabled,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == StateUnspecified => onStateUnspecified(),
            _ when this == Running => onRunning(),
            _ when this == Paused => onPaused(),
            _ when this == Disabled => onDisabled(),
            _ => otherwise(Value)
        };

    public void Match(Action onStateUnspecified,
        Action onRunning,
        Action onPaused,
        Action onDisabled,
        Action<string> otherwise)
    {
        if (this == StateUnspecified) onStateUnspecified();
        else if (this == Running) onRunning();
        else if (this == Paused) onPaused();
        else if (this == Disabled) onDisabled();
        else otherwise(Value);
    }
}
