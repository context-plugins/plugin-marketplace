using System;
using System.Text.Json.Serialization;
using AmazonSwf.Core.Enum;

namespace AmazonSwf.Models.Enums;

/// <summary>
/// The policy to use for the child workflow executions of the new execution if it is terminated by calling the TerminateWorkflowExecution action explicitly or due to an expired timeout. The supported child policies are: TERMINATE – The child executions are terminated. REQUEST_CANCEL – A request to cancel is attempted for each child execution by recording a WorkflowExecutionCancelRequested event in its history. It is up to the decider to take appropriate actions when it receives an execution history with this event. ABANDON – No action is taken. The child executions continue to run.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ChildPolicy4>))]
public sealed record ChildPolicy4 : OpenStringEnum<ChildPolicy4>
{
    private ChildPolicy4(string value) : base(value)
    {
    }

    public static readonly ChildPolicy4 Terminate = new("TERMINATE");

    public static readonly ChildPolicy4 RequestCancel = new("REQUEST_CANCEL");

    public static readonly ChildPolicy4 Abandon = new("ABANDON");

    public TResult Match<TResult>(Func<TResult> onTerminate,
        Func<TResult> onRequestCancel,
        Func<TResult> onAbandon,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Terminate => onTerminate(),
            _ when this == RequestCancel => onRequestCancel(),
            _ when this == Abandon => onAbandon(),
            _ => otherwise(Value)
        };

    public void Match(Action onTerminate, Action onRequestCancel, Action onAbandon, Action<string> otherwise)
    {
        if (this == Terminate) onTerminate();
        else if (this == RequestCancel) onRequestCancel();
        else if (this == Abandon) onAbandon();
        else otherwise(Value);
    }
}
