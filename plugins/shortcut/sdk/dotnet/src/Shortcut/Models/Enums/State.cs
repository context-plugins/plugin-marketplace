using System;
using System.Text.Json.Serialization;
using Shortcut.Core.Enum;

namespace Shortcut.Models.Enums;

/// <summary>
/// <c>Deprecated</c> The Epic's state (to do, in progress, or done); will be ignored when <c>epic_state_id</c> is set.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<State>))]
public sealed record State : OpenStringEnum<State>
{
    private State(string value) : base(value)
    {
    }

    public static readonly State InProgress = new("in progress");

    public static readonly State ToDo = new("to do");

    public static readonly State Done = new("done");

    public TResult Match<TResult>(Func<TResult> onInProgress,
        Func<TResult> onToDo,
        Func<TResult> onDone,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == InProgress => onInProgress(),
            _ when this == ToDo => onToDo(),
            _ when this == Done => onDone(),
            _ => otherwise(Value)
        };

    public void Match(Action onInProgress, Action onToDo, Action onDone, Action<string> otherwise)
    {
        if (this == InProgress) onInProgress();
        else if (this == ToDo) onToDo();
        else if (this == Done) onDone();
        else otherwise(Value);
    }
}
