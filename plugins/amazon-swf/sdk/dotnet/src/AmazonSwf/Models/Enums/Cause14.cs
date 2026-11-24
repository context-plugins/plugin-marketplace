using System;
using System.Text.Json.Serialization;
using AmazonSwf.Core.Enum;

namespace AmazonSwf.Models.Enums;

/// <summary>
/// The cause of the failure. To help diagnose issues, use this information to trace back the chain of events leading up to this event. If cause is set to OPERATION_NOT_PERMITTED, the decision failed because the IAM role attached to the execution lacked sufficient permissions. For details and example IAM policies, see Lambda Tasks in the Amazon SWF Developer Guide.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Cause14>))]
public sealed record Cause14 : OpenStringEnum<Cause14>
{
    private Cause14(string value) : base(value)
    {
    }

    public static readonly Cause14 AssumeRoleFailed = new("ASSUME_ROLE_FAILED");

    public TResult Match<TResult>(Func<TResult> onAssumeRoleFailed, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AssumeRoleFailed => onAssumeRoleFailed(),
            _ => otherwise(Value)
        };

    public void Match(Action onAssumeRoleFailed, Action<string> otherwise)
    {
        if (this == AssumeRoleFailed) onAssumeRoleFailed();
        else otherwise(Value);
    }
}
