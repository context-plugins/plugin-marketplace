using System;
using System.Text.Json.Serialization;
using AmazonSwf.Core.Enum;

namespace AmazonSwf.Models.Enums;

/// <summary>
/// The close status that must match the close status of an execution for it to meet the criteria of this filter.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<StatusAmazonSimpleWorkflowServiceOperationsApi>))]
public sealed record StatusAmazonSimpleWorkflowServiceOperationsApi : OpenStringEnum<StatusAmazonSimpleWorkflowServiceOperationsApi>
{
    private StatusAmazonSimpleWorkflowServiceOperationsApi(string value) : base(value)
    {
    }

    public static readonly StatusAmazonSimpleWorkflowServiceOperationsApi Completed = new("COMPLETED");

    public static readonly StatusAmazonSimpleWorkflowServiceOperationsApi Failed = new("FAILED");

    public static readonly StatusAmazonSimpleWorkflowServiceOperationsApi Canceled = new("CANCELED");

    public static readonly StatusAmazonSimpleWorkflowServiceOperationsApi Terminated = new("TERMINATED");

    public static readonly StatusAmazonSimpleWorkflowServiceOperationsApi ContinuedAsNew = new("CONTINUED_AS_NEW");

    public static readonly StatusAmazonSimpleWorkflowServiceOperationsApi TimedOut = new("TIMED_OUT");

    public TResult Match<TResult>(Func<TResult> onCompleted,
        Func<TResult> onFailed,
        Func<TResult> onCanceled,
        Func<TResult> onTerminated,
        Func<TResult> onContinuedAsNew,
        Func<TResult> onTimedOut,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Completed => onCompleted(),
            _ when this == Failed => onFailed(),
            _ when this == Canceled => onCanceled(),
            _ when this == Terminated => onTerminated(),
            _ when this == ContinuedAsNew => onContinuedAsNew(),
            _ when this == TimedOut => onTimedOut(),
            _ => otherwise(Value)
        };

    public void Match(Action onCompleted,
        Action onFailed,
        Action onCanceled,
        Action onTerminated,
        Action onContinuedAsNew,
        Action onTimedOut,
        Action<string> otherwise)
    {
        if (this == Completed) onCompleted();
        else if (this == Failed) onFailed();
        else if (this == Canceled) onCanceled();
        else if (this == Terminated) onTerminated();
        else if (this == ContinuedAsNew) onContinuedAsNew();
        else if (this == TimedOut) onTimedOut();
        else otherwise(Value);
    }
}
