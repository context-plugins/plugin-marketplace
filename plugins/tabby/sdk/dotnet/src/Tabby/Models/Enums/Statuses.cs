using System;
using System.Text.Json.Serialization;
using Tabby.Core.Enum;

namespace Tabby.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Statuses>))]
public sealed record Statuses : OpenStringEnum<Statuses>
{
    private Statuses(string value) : base(value)
    {
    }

    public static readonly Statuses New = new("new");

    public static readonly Statuses Declined = new("declined");

    public static readonly Statuses Cancelled = new("cancelled");

    public static readonly Statuses Refunded = new("refunded");

    public static readonly Statuses InProgress = new("in_progress");

    public static readonly Statuses EvidenceMerchant = new("evidence_merchant");

    public static readonly Statuses EvidenceCustomer = new("evidence_customer");

    public TResult Match<TResult>(Func<TResult> onNew,
        Func<TResult> onDeclined,
        Func<TResult> onCancelled,
        Func<TResult> onRefunded,
        Func<TResult> onInProgress,
        Func<TResult> onEvidenceMerchant,
        Func<TResult> onEvidenceCustomer,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == New => onNew(),
            _ when this == Declined => onDeclined(),
            _ when this == Cancelled => onCancelled(),
            _ when this == Refunded => onRefunded(),
            _ when this == InProgress => onInProgress(),
            _ when this == EvidenceMerchant => onEvidenceMerchant(),
            _ when this == EvidenceCustomer => onEvidenceCustomer(),
            _ => otherwise(Value)
        };

    public void Match(Action onNew,
        Action onDeclined,
        Action onCancelled,
        Action onRefunded,
        Action onInProgress,
        Action onEvidenceMerchant,
        Action onEvidenceCustomer,
        Action<string> otherwise)
    {
        if (this == New) onNew();
        else if (this == Declined) onDeclined();
        else if (this == Cancelled) onCancelled();
        else if (this == Refunded) onRefunded();
        else if (this == InProgress) onInProgress();
        else if (this == EvidenceMerchant) onEvidenceMerchant();
        else if (this == EvidenceCustomer) onEvidenceCustomer();
        else otherwise(Value);
    }
}
