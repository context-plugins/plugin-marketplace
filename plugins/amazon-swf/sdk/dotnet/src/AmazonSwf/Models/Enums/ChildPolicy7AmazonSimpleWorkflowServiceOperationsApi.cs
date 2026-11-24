using System;
using System.Text.Json.Serialization;
using AmazonSwf.Core.Enum;

namespace AmazonSwf.Models.Enums;

/// <summary>
/// If set, specifies the policy to use for the child workflow executions of the workflow execution being terminated. This policy overrides the child policy specified for the workflow execution at registration time or when starting the execution. The supported child policies are: TERMINATE – The child executions are terminated. REQUEST_CANCEL – A request to cancel is attempted for each child execution by recording a WorkflowExecutionCancelRequested event in its history. It is up to the decider to take appropriate actions when it receives an execution history with this event. ABANDON – No action is
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ChildPolicy7AmazonSimpleWorkflowServiceOperationsApi>))]
public sealed record ChildPolicy7AmazonSimpleWorkflowServiceOperationsApi : OpenStringEnum<ChildPolicy7AmazonSimpleWorkflowServiceOperationsApi>
{
    private ChildPolicy7AmazonSimpleWorkflowServiceOperationsApi(string value) : base(value)
    {
    }

    public static readonly ChildPolicy7AmazonSimpleWorkflowServiceOperationsApi Terminate = new("TERMINATE");

    public static readonly ChildPolicy7AmazonSimpleWorkflowServiceOperationsApi RequestCancel = new("REQUEST_CANCEL");

    public static readonly ChildPolicy7AmazonSimpleWorkflowServiceOperationsApi Abandon = new("ABANDON");

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
