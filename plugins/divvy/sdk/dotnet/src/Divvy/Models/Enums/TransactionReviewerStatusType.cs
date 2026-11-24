using System;
using System.Text.Json.Serialization;
using Divvy.Core.Enum;

namespace Divvy.Models.Enums;

/// <summary>
/// Spend \&amp; Expense transactions reviewer status type.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<TransactionReviewerStatusType>))]
public sealed record TransactionReviewerStatusType : OpenStringEnum<TransactionReviewerStatusType>
{
    private TransactionReviewerStatusType(string value) : base(value)
    {
    }

    public static readonly TransactionReviewerStatusType Waiting = new("WAITING");

    public static readonly TransactionReviewerStatusType Approved = new("APPROVED");

    public static readonly TransactionReviewerStatusType Denied = new("DENIED");

    public TResult Match<TResult>(Func<TResult> onWaiting,
        Func<TResult> onApproved,
        Func<TResult> onDenied,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Waiting => onWaiting(),
            _ when this == Approved => onApproved(),
            _ when this == Denied => onDenied(),
            _ => otherwise(Value)
        };

    public void Match(Action onWaiting, Action onApproved, Action onDenied, Action<string> otherwise)
    {
        if (this == Waiting) onWaiting();
        else if (this == Approved) onApproved();
        else if (this == Denied) onDenied();
        else otherwise(Value);
    }
}
