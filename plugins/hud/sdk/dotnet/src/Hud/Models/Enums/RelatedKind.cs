using System;
using System.Text.Json.Serialization;
using Hud.Core.Enum;

namespace Hud.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<RelatedKind>))]
public sealed record RelatedKind : OpenStringEnum<RelatedKind>
{
    private RelatedKind(string value) : base(value)
    {
    }

    public static readonly RelatedKind Job = new("job");

    public static readonly RelatedKind Task = new("task");

    public static readonly RelatedKind Recent = new("recent");

    public static readonly RelatedKind Discover = new("discover");

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
