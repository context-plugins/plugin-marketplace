using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

/// <summary>
/// Approval state for purchases of this commitment type. Approve or pause on the Planned Purchases tab in the DoiT Console. Absent or unrecognized stored values are returned as <c>pending_approval</c>, except on autonomous automation-mode lines, where they are returned as <c>approved</c> since no customer approval is required.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<PurchaseApprovalStatus>))]
public sealed record PurchaseApprovalStatus : OpenStringEnum<PurchaseApprovalStatus>
{
    private PurchaseApprovalStatus(string value) : base(value)
    {
    }

    public static readonly PurchaseApprovalStatus PendingApproval = new("pending_approval");

    public static readonly PurchaseApprovalStatus Approved = new("approved");

    public static readonly PurchaseApprovalStatus Paused = new("paused");

    public TResult Match<TResult>(Func<TResult> onPendingApproval,
        Func<TResult> onApproved,
        Func<TResult> onPaused,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == PendingApproval => onPendingApproval(),
            _ when this == Approved => onApproved(),
            _ when this == Paused => onPaused(),
            _ => otherwise(Value)
        };

    public void Match(Action onPendingApproval, Action onApproved, Action onPaused, Action<string> otherwise)
    {
        if (this == PendingApproval) onPendingApproval();
        else if (this == Approved) onApproved();
        else if (this == Paused) onPaused();
        else otherwise(Value);
    }
}
