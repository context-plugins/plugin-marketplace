using System;
using System.Text.Json.Serialization;
using Divvy.Core.Enum;

namespace Divvy.Models.Enums;

/// <summary>
/// Dispute status enum for Spend \&amp; Expense Transactions.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<DisputeStatusType>))]
public sealed record DisputeStatusType : OpenStringEnum<DisputeStatusType>
{
    private DisputeStatusType(string value) : base(value)
    {
    }

    public static readonly DisputeStatusType Submitted = new("SUBMITTED");

    public static readonly DisputeStatusType InProgress = new("IN_PROGRESS");

    public static readonly DisputeStatusType ClosedWon = new("CLOSED_WON");

    public static readonly DisputeStatusType ClosedLost = new("CLOSED_LOST");

    public TResult Match<TResult>(Func<TResult> onSubmitted,
        Func<TResult> onInProgress,
        Func<TResult> onClosedWon,
        Func<TResult> onClosedLost,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Submitted => onSubmitted(),
            _ when this == InProgress => onInProgress(),
            _ when this == ClosedWon => onClosedWon(),
            _ when this == ClosedLost => onClosedLost(),
            _ => otherwise(Value)
        };

    public void Match(Action onSubmitted,
        Action onInProgress,
        Action onClosedWon,
        Action onClosedLost,
        Action<string> otherwise)
    {
        if (this == Submitted) onSubmitted();
        else if (this == InProgress) onInProgress();
        else if (this == ClosedWon) onClosedWon();
        else if (this == ClosedLost) onClosedLost();
        else otherwise(Value);
    }
}
