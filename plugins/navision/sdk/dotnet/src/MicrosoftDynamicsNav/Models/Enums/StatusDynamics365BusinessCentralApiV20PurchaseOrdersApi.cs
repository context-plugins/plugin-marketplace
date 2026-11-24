using System;
using System.Text.Json.Serialization;
using MicrosoftDynamicsNav.Core.Enum;

namespace MicrosoftDynamicsNav.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<StatusDynamics365BusinessCentralApiV20PurchaseOrdersApi>))]
public sealed record StatusDynamics365BusinessCentralApiV20PurchaseOrdersApi : OpenStringEnum<StatusDynamics365BusinessCentralApiV20PurchaseOrdersApi>
{
    private StatusDynamics365BusinessCentralApiV20PurchaseOrdersApi(string value) : base(value)
    {
    }

    public static readonly StatusDynamics365BusinessCentralApiV20PurchaseOrdersApi Draft = new("Draft");

    public static readonly StatusDynamics365BusinessCentralApiV20PurchaseOrdersApi InReview = new("In Review");

    public static readonly StatusDynamics365BusinessCentralApiV20PurchaseOrdersApi Open = new("Open");

    public static readonly StatusDynamics365BusinessCentralApiV20PurchaseOrdersApi Released = new("Released");

    public TResult Match<TResult>(Func<TResult> onDraft,
        Func<TResult> onInReview,
        Func<TResult> onOpen,
        Func<TResult> onReleased,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Draft => onDraft(),
            _ when this == InReview => onInReview(),
            _ when this == Open => onOpen(),
            _ when this == Released => onReleased(),
            _ => otherwise(Value)
        };

    public void Match(Action onDraft, Action onInReview, Action onOpen, Action onReleased, Action<string> otherwise)
    {
        if (this == Draft) onDraft();
        else if (this == InReview) onInReview();
        else if (this == Open) onOpen();
        else if (this == Released) onReleased();
        else otherwise(Value);
    }
}
