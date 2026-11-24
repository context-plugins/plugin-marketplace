using System;
using System.Text.Json.Serialization;
using AmazonSwf.Core.Enum;

namespace AmazonSwf.Models.Enums;

/// <summary>
/// If set, indicates that the workflow execution was automatically terminated, and specifies the cause. This happens if the parent workflow execution times out or is terminated and the child policy is set to terminate child executions.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Cause5>))]
public sealed record Cause5 : OpenStringEnum<Cause5>
{
    private Cause5(string value) : base(value)
    {
    }

    public static readonly Cause5 ChildPolicyApplied = new("CHILD_POLICY_APPLIED");

    public static readonly Cause5 EventLimitExceeded = new("EVENT_LIMIT_EXCEEDED");

    public static readonly Cause5 OperatorInitiated = new("OPERATOR_INITIATED");

    public TResult Match<TResult>(Func<TResult> onChildPolicyApplied,
        Func<TResult> onEventLimitExceeded,
        Func<TResult> onOperatorInitiated,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == ChildPolicyApplied => onChildPolicyApplied(),
            _ when this == EventLimitExceeded => onEventLimitExceeded(),
            _ when this == OperatorInitiated => onOperatorInitiated(),
            _ => otherwise(Value)
        };

    public void Match(Action onChildPolicyApplied,
        Action onEventLimitExceeded,
        Action onOperatorInitiated,
        Action<string> otherwise)
    {
        if (this == ChildPolicyApplied) onChildPolicyApplied();
        else if (this == EventLimitExceeded) onEventLimitExceeded();
        else if (this == OperatorInitiated) onOperatorInitiated();
        else otherwise(Value);
    }
}
