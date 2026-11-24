using System;
using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Enum;

namespace AwsStorageGateway.Models.Enums;

/// <summary>
/// Tape retention lock can be configured in two modes. When configured in governance mode, Amazon Web Services accounts with specific IAM permissions are authorized to remove the tape retention lock from archived virtual tapes. When configured in compliance mode, the tape retention lock cannot be removed by any user, including the root Amazon Web Services account.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<RetentionLockType>))]
public sealed record RetentionLockType : OpenStringEnum<RetentionLockType>
{
    private RetentionLockType(string value) : base(value)
    {
    }

    public static readonly RetentionLockType Compliance = new("COMPLIANCE");

    public static readonly RetentionLockType Governance = new("GOVERNANCE");

    public static readonly RetentionLockType None = new("NONE");

    public TResult Match<TResult>(Func<TResult> onCompliance,
        Func<TResult> onGovernance,
        Func<TResult> onNone,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Compliance => onCompliance(),
            _ when this == Governance => onGovernance(),
            _ when this == None => onNone(),
            _ => otherwise(Value)
        };

    public void Match(Action onCompliance, Action onGovernance, Action onNone, Action<string> otherwise)
    {
        if (this == Compliance) onCompliance();
        else if (this == Governance) onGovernance();
        else if (this == None) onNone();
        else otherwise(Value);
    }
}
