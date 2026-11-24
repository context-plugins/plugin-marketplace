using System;
using System.Text.Json.Serialization;
using AmazonSwf.Core.Enum;

namespace AmazonSwf.Models.Enums;

/// <summary>
/// If set, specifies the default policy to use for the child workflow executions when a workflow execution of this type is terminated, by calling the TerminateWorkflowExecution action explicitly or due to an expired timeout. This default can be overridden when starting a workflow execution using the StartWorkflowExecution action or the StartChildWorkflowExecution Decision. The supported child policies are: TERMINATE – The child executions are terminated. REQUEST_CANCEL – A request to cancel is attempted for each child execution by recording a WorkflowExecutionCancelRequested event in its history.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<DefaultChildPolicy>))]
public sealed record DefaultChildPolicy : OpenStringEnum<DefaultChildPolicy>
{
    private DefaultChildPolicy(string value) : base(value)
    {
    }

    public static readonly DefaultChildPolicy Terminate = new("TERMINATE");

    public static readonly DefaultChildPolicy RequestCancel = new("REQUEST_CANCEL");

    public static readonly DefaultChildPolicy Abandon = new("ABANDON");

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
