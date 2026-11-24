using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

/// <summary>
/// Customer commitment approval state for this scope. Absent or unrecognized stored values (including <c>REJECTED</c>) are returned as <c>pending_approval</c>, except on autonomous automation-mode lines, where they are returned as <c>approved</c> since no customer approval is required.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<PurchaseApprovalStatusDoiTPerfectScaleForCommitmentsGcpApi>))]
public sealed record PurchaseApprovalStatusDoiTPerfectScaleForCommitmentsGcpApi : OpenStringEnum<PurchaseApprovalStatusDoiTPerfectScaleForCommitmentsGcpApi>
{
    private PurchaseApprovalStatusDoiTPerfectScaleForCommitmentsGcpApi(string value) : base(value)
    {
    }

    public static readonly PurchaseApprovalStatusDoiTPerfectScaleForCommitmentsGcpApi PendingApproval = new(
        "pending_approval");

    public static readonly PurchaseApprovalStatusDoiTPerfectScaleForCommitmentsGcpApi Approved = new("approved");

    public static readonly PurchaseApprovalStatusDoiTPerfectScaleForCommitmentsGcpApi Paused = new("paused");

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
