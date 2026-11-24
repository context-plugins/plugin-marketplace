using System;
using System.Text.Json.Serialization;
using AwsStepFunctions.Core.Enum;

namespace AwsStepFunctions.Models.Enums;

/// <summary>
/// Sets a filter to list executions based on whether or not they have been redriven. For a Distributed Map, redriveFilter sets a filter to list child workflow executions based on whether or not they have been redriven. If you do not provide a redriveFilter, Step Functions returns a list of both redriven and non-redriven executions. If you provide a state machine ARN in redriveFilter, the API returns a validation exception.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<RedriveFilter>))]
public sealed record RedriveFilter : OpenStringEnum<RedriveFilter>
{
    private RedriveFilter(string value) : base(value)
    {
    }

    public static readonly RedriveFilter Redriven = new("REDRIVEN");

    public static readonly RedriveFilter NotRedriven = new("NOT_REDRIVEN");

    public TResult Match<TResult>(Func<TResult> onRedriven,
        Func<TResult> onNotRedriven,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Redriven => onRedriven(),
            _ when this == NotRedriven => onNotRedriven(),
            _ => otherwise(Value)
        };

    public void Match(Action onRedriven, Action onNotRedriven, Action<string> otherwise)
    {
        if (this == Redriven) onRedriven();
        else if (this == NotRedriven) onNotRedriven();
        else otherwise(Value);
    }
}
