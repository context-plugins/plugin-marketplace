using System;
using System.Text.Json.Serialization;
using Divvy.Core.Enum;

namespace Divvy.Models.Enums;

/// <summary>
/// StatusTag enum for Spend \&amp; Expense Transactions.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<TransactionStatusTagType>))]
public sealed record TransactionStatusTagType : OpenStringEnum<TransactionStatusTagType>
{
    private TransactionStatusTagType(string value) : base(value)
    {
    }

    public static readonly TransactionStatusTagType Approved = new("APPROVED");

    public static readonly TransactionStatusTagType Complete = new("COMPLETE");

    public static readonly TransactionStatusTagType Declined = new("DECLINED");

    public static readonly TransactionStatusTagType Denied = new("DENIED");

    public static readonly TransactionStatusTagType DisputeLost = new("DISPUTE_LOST");

    public static readonly TransactionStatusTagType DisputeUpdate = new("DISPUTE_UPDATE");

    public static readonly TransactionStatusTagType DisputeWon = new("DISPUTE_WON");

    public static readonly TransactionStatusTagType Disputed = new("DISPUTED");

    public static readonly TransactionStatusTagType DoNotSync = new("DO_NOT_SYNC");

    public static readonly TransactionStatusTagType Incomplete = new("INCOMPLETE");

    public static readonly TransactionStatusTagType None = new("NONE");

    public static readonly TransactionStatusTagType Pending = new("PENDING");

    public static readonly TransactionStatusTagType PtrIncomplete = new("PTR_INCOMPLETE");

    public static readonly TransactionStatusTagType PtrNeedsYourApproval = new("PTR_NEEDS_YOUR_APPROVAL");

    public static readonly TransactionStatusTagType PtrPendingApproval = new("PTR_PENDING_APPROVAL");

    public static readonly TransactionStatusTagType PtrUpcomingApproval = new("PTR_UPCOMING_APPROVAL");

    public static readonly TransactionStatusTagType Reviewed = new("REVIEWED");

    public TResult Match<TResult>(Func<TResult> onApproved,
        Func<TResult> onComplete,
        Func<TResult> onDeclined,
        Func<TResult> onDenied,
        Func<TResult> onDisputeLost,
        Func<TResult> onDisputeUpdate,
        Func<TResult> onDisputeWon,
        Func<TResult> onDisputed,
        Func<TResult> onDoNotSync,
        Func<TResult> onIncomplete,
        Func<TResult> onNone,
        Func<TResult> onPending,
        Func<TResult> onPtrIncomplete,
        Func<TResult> onPtrNeedsYourApproval,
        Func<TResult> onPtrPendingApproval,
        Func<TResult> onPtrUpcomingApproval,
        Func<TResult> onReviewed,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Approved => onApproved(),
            _ when this == Complete => onComplete(),
            _ when this == Declined => onDeclined(),
            _ when this == Denied => onDenied(),
            _ when this == DisputeLost => onDisputeLost(),
            _ when this == DisputeUpdate => onDisputeUpdate(),
            _ when this == DisputeWon => onDisputeWon(),
            _ when this == Disputed => onDisputed(),
            _ when this == DoNotSync => onDoNotSync(),
            _ when this == Incomplete => onIncomplete(),
            _ when this == None => onNone(),
            _ when this == Pending => onPending(),
            _ when this == PtrIncomplete => onPtrIncomplete(),
            _ when this == PtrNeedsYourApproval => onPtrNeedsYourApproval(),
            _ when this == PtrPendingApproval => onPtrPendingApproval(),
            _ when this == PtrUpcomingApproval => onPtrUpcomingApproval(),
            _ when this == Reviewed => onReviewed(),
            _ => otherwise(Value)
        };

    public void Match(Action onApproved,
        Action onComplete,
        Action onDeclined,
        Action onDenied,
        Action onDisputeLost,
        Action onDisputeUpdate,
        Action onDisputeWon,
        Action onDisputed,
        Action onDoNotSync,
        Action onIncomplete,
        Action onNone,
        Action onPending,
        Action onPtrIncomplete,
        Action onPtrNeedsYourApproval,
        Action onPtrPendingApproval,
        Action onPtrUpcomingApproval,
        Action onReviewed,
        Action<string> otherwise)
    {
        if (this == Approved) onApproved();
        else if (this == Complete) onComplete();
        else if (this == Declined) onDeclined();
        else if (this == Denied) onDenied();
        else if (this == DisputeLost) onDisputeLost();
        else if (this == DisputeUpdate) onDisputeUpdate();
        else if (this == DisputeWon) onDisputeWon();
        else if (this == Disputed) onDisputed();
        else if (this == DoNotSync) onDoNotSync();
        else if (this == Incomplete) onIncomplete();
        else if (this == None) onNone();
        else if (this == Pending) onPending();
        else if (this == PtrIncomplete) onPtrIncomplete();
        else if (this == PtrNeedsYourApproval) onPtrNeedsYourApproval();
        else if (this == PtrPendingApproval) onPtrPendingApproval();
        else if (this == PtrUpcomingApproval) onPtrUpcomingApproval();
        else if (this == Reviewed) onReviewed();
        else otherwise(Value);
    }
}
