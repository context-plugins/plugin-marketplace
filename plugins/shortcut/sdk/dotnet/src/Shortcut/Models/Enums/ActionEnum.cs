using System;
using System.Text.Json.Serialization;
using Shortcut.Core.Enum;

namespace Shortcut.Models.Enums;

/// <summary>
/// The action of the entity referenced.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ActionEnum>))]
public sealed record ActionEnum : OpenStringEnum<ActionEnum>
{
    private ActionEnum(string value) : base(value)
    {
    }

    public static readonly ActionEnum Open = new("open");

    public static readonly ActionEnum Update = new("update");

    public static readonly ActionEnum Reopen = new("reopen");

    public static readonly ActionEnum Close = new("close");

    public static readonly ActionEnum Sync = new("sync");

    public static readonly ActionEnum Comment = new("comment");

    public TResult Match<TResult>(Func<TResult> onOpen,
        Func<TResult> onUpdate,
        Func<TResult> onReopen,
        Func<TResult> onClose,
        Func<TResult> onSync,
        Func<TResult> onComment,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Open => onOpen(),
            _ when this == Update => onUpdate(),
            _ when this == Reopen => onReopen(),
            _ when this == Close => onClose(),
            _ when this == Sync => onSync(),
            _ when this == Comment => onComment(),
            _ => otherwise(Value)
        };

    public void Match(Action onOpen,
        Action onUpdate,
        Action onReopen,
        Action onClose,
        Action onSync,
        Action onComment,
        Action<string> otherwise)
    {
        if (this == Open) onOpen();
        else if (this == Update) onUpdate();
        else if (this == Reopen) onReopen();
        else if (this == Close) onClose();
        else if (this == Sync) onSync();
        else if (this == Comment) onComment();
        else otherwise(Value);
    }
}
