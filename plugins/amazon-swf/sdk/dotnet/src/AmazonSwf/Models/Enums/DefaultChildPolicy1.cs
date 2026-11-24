using System;
using System.Text.Json.Serialization;
using AmazonSwf.Core.Enum;

namespace AmazonSwf.Models.Enums;

/// <summary>
/// The default policy to use for the child workflow executions when a workflow execution of this type is terminated, by calling the TerminateWorkflowExecution action explicitly or due to an expired timeout. This default can be overridden when starting a workflow execution using the StartWorkflowExecution action or the StartChildWorkflowExecution Decision. The supported child policies are: TERMINATE – The child executions are terminated. REQUEST_CANCEL – A request to cancel is attempted for each child execution by recording a WorkflowExecutionCancelRequested event in its history. It is up to the d
/// </summary>
[JsonConverter(typeof(StringEnumConverter<DefaultChildPolicy1>))]
public sealed record DefaultChildPolicy1 : OpenStringEnum<DefaultChildPolicy1>
{
    private DefaultChildPolicy1(string value) : base(value)
    {
    }

    public static readonly DefaultChildPolicy1 Terminate = new("TERMINATE");

    public static readonly DefaultChildPolicy1 RequestCancel = new("REQUEST_CANCEL");

    public static readonly DefaultChildPolicy1 Abandon = new("ABANDON");

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
