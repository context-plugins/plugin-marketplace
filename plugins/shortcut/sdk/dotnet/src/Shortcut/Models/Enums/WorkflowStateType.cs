using System;
using System.Text.Json.Serialization;
using Shortcut.Core.Enum;

namespace Shortcut.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<WorkflowStateType>))]
public sealed record WorkflowStateType : OpenStringEnum<WorkflowStateType>
{
    private WorkflowStateType(string value) : base(value)
    {
    }

    public static readonly WorkflowStateType Started = new("started");

    public static readonly WorkflowStateType Backlog = new("backlog");

    public static readonly WorkflowStateType Unstarted = new("unstarted");

    public static readonly WorkflowStateType Done = new("done");

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
