using System;
using System.Text.Json.Serialization;
using AmazonSwf.Core.Enum;

namespace AmazonSwf.Models.Enums;

/// <summary>
/// If set, indicates that the request to cancel the workflow execution was automatically generated, and specifies the cause. This happens if the parent workflow execution times out or is terminated, and the child policy is set to cancel child executions.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Cause6>))]
public sealed record Cause6 : OpenStringEnum<Cause6>
{
    private Cause6(string value) : base(value)
    {
    }

    public static readonly Cause6 ChildPolicyApplied = new("CHILD_POLICY_APPLIED");

    public TResult Match<TResult>(Func<TResult> onChildPolicyApplied, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == ChildPolicyApplied => onChildPolicyApplied(),
            _ => otherwise(Value)
        };

    public void Match(Action onChildPolicyApplied, Action<string> otherwise)
    {
        if (this == ChildPolicyApplied) onChildPolicyApplied();
        else otherwise(Value);
    }
}
