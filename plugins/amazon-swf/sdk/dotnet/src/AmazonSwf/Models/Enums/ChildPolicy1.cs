using System;
using System.Text.Json.Serialization;
using AmazonSwf.Core.Enum;

namespace AmazonSwf.Models.Enums;

/// <summary>
/// If set, specifies the policy to use for the child workflow executions if the workflow execution being started is terminated by calling the TerminateWorkflowExecution action explicitly or due to an expired timeout. This policy overrides the default child policy specified when registering the workflow type using RegisterWorkflowType. The supported child policies are: TERMINATE – The child executions are terminated. REQUEST_CANCEL – A request to cancel is attempted for each child execution by recording a WorkflowExecutionCancelRequested event in its history. It is up to the decider to take approp
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ChildPolicy1>))]
public sealed record ChildPolicy1 : OpenStringEnum<ChildPolicy1>
{
    private ChildPolicy1(string value) : base(value)
    {
    }

    public static readonly ChildPolicy1 Terminate = new("TERMINATE");

    public static readonly ChildPolicy1 RequestCancel = new("REQUEST_CANCEL");

    public static readonly ChildPolicy1 Abandon = new("ABANDON");

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
