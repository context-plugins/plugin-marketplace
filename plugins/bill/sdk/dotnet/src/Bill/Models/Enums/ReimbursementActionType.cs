using System;
using System.Text.Json.Serialization;
using Bill.Core.Enum;

namespace Bill.Models.Enums;

/// <summary>
/// Enum representing the type of action to take on a reimbursement.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ReimbursementActionType>))]
public sealed record ReimbursementActionType : OpenStringEnum<ReimbursementActionType>
{
    private ReimbursementActionType(string value) : base(value)
    {
    }

    public static readonly ReimbursementActionType Approve = new("APPROVE");

    public static readonly ReimbursementActionType Deny = new("DENY");

    public TResult Match<TResult>(Func<TResult> onApprove, Func<TResult> onDeny, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Approve => onApprove(),
            _ when this == Deny => onDeny(),
            _ => otherwise(Value)
        };

    public void Match(Action onApprove, Action onDeny, Action<string> otherwise)
    {
        if (this == Approve) onApprove();
        else if (this == Deny) onDeny();
        else otherwise(Value);
    }
}
