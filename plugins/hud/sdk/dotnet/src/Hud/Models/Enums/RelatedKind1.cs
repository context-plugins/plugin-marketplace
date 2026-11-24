using System;
using System.Text.Json.Serialization;
using Hud.Core.Enum;

namespace Hud.Models.Enums;

/// <summary>
/// <c>job</c> (same job_id), <c>task</c> (every version of the same task), <c>recent</c> (caller's own traces, requires auth), or <c>discover</c> (most-recent visible traces overall).
/// </summary>
[JsonConverter(typeof(StringEnumConverter<RelatedKind1>))]
public sealed record RelatedKind1 : OpenStringEnum<RelatedKind1>
{
    private RelatedKind1(string value) : base(value)
    {
    }

    public static readonly RelatedKind1 Job = new("job");

    public static readonly RelatedKind1 Task = new("task");

    public static readonly RelatedKind1 Recent = new("recent");

    public static readonly RelatedKind1 Discover = new("discover");

    public TResult Match<TResult>(Func<TResult> onJob,
        Func<TResult> onTask,
        Func<TResult> onRecent,
        Func<TResult> onDiscover,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Job => onJob(),
            _ when this == Task => onTask(),
            _ when this == Recent => onRecent(),
            _ when this == Discover => onDiscover(),
            _ => otherwise(Value)
        };

    public void Match(Action onJob, Action onTask, Action onRecent, Action onDiscover, Action<string> otherwise)
    {
        if (this == Job) onJob();
        else if (this == Task) onTask();
        else if (this == Recent) onRecent();
        else if (this == Discover) onDiscover();
        else otherwise(Value);
    }
}
