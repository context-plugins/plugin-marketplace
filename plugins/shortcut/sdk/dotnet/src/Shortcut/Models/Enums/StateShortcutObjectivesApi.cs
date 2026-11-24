using System;
using System.Text.Json.Serialization;
using Shortcut.Core.Enum;

namespace Shortcut.Models.Enums;

/// <summary>
/// The workflow state that the Objective is in.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<StateShortcutObjectivesApi>))]
public sealed record StateShortcutObjectivesApi : OpenStringEnum<StateShortcutObjectivesApi>
{
    private StateShortcutObjectivesApi(string value) : base(value)
    {
    }

    public static readonly StateShortcutObjectivesApi InProgress = new("in progress");

    public static readonly StateShortcutObjectivesApi ToDo = new("to do");

    public static readonly StateShortcutObjectivesApi Done = new("done");

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
