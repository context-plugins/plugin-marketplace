using System;
using System.Text.Json.Serialization;
using Bill.Core.Enum;

namespace Bill.Models.Enums;

/// <summary>
/// Bill approval and denial actions.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<BillApproveDenyAction>))]
public sealed record BillApproveDenyAction : OpenStringEnum<BillApproveDenyAction>
{
    private BillApproveDenyAction(string value) : base(value)
    {
    }

    public static readonly BillApproveDenyAction Approve = new("APPROVE");

    public static readonly BillApproveDenyAction Deny = new("DENY");

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
