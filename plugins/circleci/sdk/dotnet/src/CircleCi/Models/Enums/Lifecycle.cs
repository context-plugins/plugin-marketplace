using System;
using System.Text.Json.Serialization;
using CircleCi.Core.Enum;

namespace CircleCi.Models.Enums;

/// <summary>
/// The build lifecycle phase
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Lifecycle>))]
public sealed record Lifecycle : OpenStringEnum<Lifecycle>
{
    private Lifecycle(string value) : base(value)
    {
    }

    public static readonly Lifecycle Queued = new("queued");

    public static readonly Lifecycle Scheduled = new("scheduled");

    public static readonly Lifecycle NotRun = new("not_run");

    public static readonly Lifecycle NotRunning = new("not_running");

    public static readonly Lifecycle Running = new("running");

    public static readonly Lifecycle Finished = new("finished");

    public TResult Match<TResult>(Func<TResult> onQueued,
        Func<TResult> onScheduled,
        Func<TResult> onNotRun,
        Func<TResult> onNotRunning,
        Func<TResult> onRunning,
        Func<TResult> onFinished,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Queued => onQueued(),
            _ when this == Scheduled => onScheduled(),
            _ when this == NotRun => onNotRun(),
            _ when this == NotRunning => onNotRunning(),
            _ when this == Running => onRunning(),
            _ when this == Finished => onFinished(),
            _ => otherwise(Value)
        };

    public void Match(Action onQueued,
        Action onScheduled,
        Action onNotRun,
        Action onNotRunning,
        Action onRunning,
        Action onFinished,
        Action<string> otherwise)
    {
        if (this == Queued) onQueued();
        else if (this == Scheduled) onScheduled();
        else if (this == NotRun) onNotRun();
        else if (this == NotRunning) onNotRunning();
        else if (this == Running) onRunning();
        else if (this == Finished) onFinished();
        else otherwise(Value);
    }
}
