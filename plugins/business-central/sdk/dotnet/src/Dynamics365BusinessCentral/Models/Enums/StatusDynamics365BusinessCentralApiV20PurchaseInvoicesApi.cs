using System;
using System.Text.Json.Serialization;
using Dynamics365BusinessCentral.Core.Enum;

namespace Dynamics365BusinessCentral.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<StatusDynamics365BusinessCentralApiV20PurchaseInvoicesApi>))]
public sealed record StatusDynamics365BusinessCentralApiV20PurchaseInvoicesApi : OpenStringEnum<StatusDynamics365BusinessCentralApiV20PurchaseInvoicesApi>
{
    private StatusDynamics365BusinessCentralApiV20PurchaseInvoicesApi(string value) : base(value)
    {
    }

    public static readonly StatusDynamics365BusinessCentralApiV20PurchaseInvoicesApi Draft = new("Draft");

    public static readonly StatusDynamics365BusinessCentralApiV20PurchaseInvoicesApi InReview = new("In Review");

    public static readonly StatusDynamics365BusinessCentralApiV20PurchaseInvoicesApi Open = new("Open");

    public static readonly StatusDynamics365BusinessCentralApiV20PurchaseInvoicesApi Paid = new("Paid");

    public static readonly StatusDynamics365BusinessCentralApiV20PurchaseInvoicesApi Canceled = new("Canceled");

    public static readonly StatusDynamics365BusinessCentralApiV20PurchaseInvoicesApi Corrective = new("Corrective");

    public TResult Match<TResult>(Func<TResult> onDraft,
        Func<TResult> onInReview,
        Func<TResult> onOpen,
        Func<TResult> onPaid,
        Func<TResult> onCanceled,
        Func<TResult> onCorrective,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Draft => onDraft(),
            _ when this == InReview => onInReview(),
            _ when this == Open => onOpen(),
            _ when this == Paid => onPaid(),
            _ when this == Canceled => onCanceled(),
            _ when this == Corrective => onCorrective(),
            _ => otherwise(Value)
        };

    public void Match(Action onDraft,
        Action onInReview,
        Action onOpen,
        Action onPaid,
        Action onCanceled,
        Action onCorrective,
        Action<string> otherwise)
    {
        if (this == Draft) onDraft();
        else if (this == InReview) onInReview();
        else if (this == Open) onOpen();
        else if (this == Paid) onPaid();
        else if (this == Canceled) onCanceled();
        else if (this == Corrective) onCorrective();
        else otherwise(Value);
    }
}
