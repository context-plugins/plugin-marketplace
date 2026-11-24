using System;
using System.Text.Json.Serialization;
using Divvy.Core.Enum;

namespace Divvy.Models.Enums;

/// <summary>
/// Approval status of a bill response.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<BillApprovalStatusResponse>))]
public sealed record BillApprovalStatusResponse : OpenStringEnum<BillApprovalStatusResponse>
{
    private BillApprovalStatusResponse(string value) : base(value)
    {
    }

    public static readonly BillApprovalStatusResponse Unassigned = new("UNASSIGNED");

    public static readonly BillApprovalStatusResponse Assigned = new("ASSIGNED");

    public static readonly BillApprovalStatusResponse Approved = new("APPROVED");

    public static readonly BillApprovalStatusResponse Approving = new("APPROVING");

    public static readonly BillApprovalStatusResponse Denied = new("DENIED");

    public static readonly BillApprovalStatusResponse Undefined = new("UNDEFINED");

    public TResult Match<TResult>(Func<TResult> onUnassigned,
        Func<TResult> onAssigned,
        Func<TResult> onApproved,
        Func<TResult> onApproving,
        Func<TResult> onDenied,
        Func<TResult> onUndefined,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Unassigned => onUnassigned(),
            _ when this == Assigned => onAssigned(),
            _ when this == Approved => onApproved(),
            _ when this == Approving => onApproving(),
            _ when this == Denied => onDenied(),
            _ when this == Undefined => onUndefined(),
            _ => otherwise(Value)
        };

    public void Match(Action onUnassigned,
        Action onAssigned,
        Action onApproved,
        Action onApproving,
        Action onDenied,
        Action onUndefined,
        Action<string> otherwise)
    {
        if (this == Unassigned) onUnassigned();
        else if (this == Assigned) onAssigned();
        else if (this == Approved) onApproved();
        else if (this == Approving) onApproving();
        else if (this == Denied) onDenied();
        else if (this == Undefined) onUndefined();
        else otherwise(Value);
    }
}
