using System;
using System.Text.Json.Serialization;
using Shortcut.Core.Enum;

namespace Shortcut.Models.Enums;

/// <summary>
/// Either "backlog", "unstarted", "started", or "done".
/// </summary>
[JsonConverter(typeof(StringEnumConverter<TypeShortcutStoriesApi>))]
public sealed record TypeShortcutStoriesApi : OpenStringEnum<TypeShortcutStoriesApi>
{
    private TypeShortcutStoriesApi(string value) : base(value)
    {
    }

    public static readonly TypeShortcutStoriesApi Started = new("started");

    public static readonly TypeShortcutStoriesApi Backlog = new("backlog");

    public static readonly TypeShortcutStoriesApi Unstarted = new("unstarted");

    public static readonly TypeShortcutStoriesApi Done = new("done");

    public TResult Match<TResult>(Func<TResult> onStarted,
        Func<TResult> onBacklog,
        Func<TResult> onUnstarted,
        Func<TResult> onDone,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Started => onStarted(),
            _ when this == Backlog => onBacklog(),
            _ when this == Unstarted => onUnstarted(),
            _ when this == Done => onDone(),
            _ => otherwise(Value)
        };

    public void Match(Action onStarted, Action onBacklog, Action onUnstarted, Action onDone, Action<string> otherwise)
    {
        if (this == Started) onStarted();
        else if (this == Backlog) onBacklog();
        else if (this == Unstarted) onUnstarted();
        else if (this == Done) onDone();
        else otherwise(Value);
    }
}
