using System;
using System.Text.Json.Serialization;
using RelmCrm.Core.Enum;

namespace RelmCrm.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<TriggerEvent>))]
public sealed record TriggerEvent : OpenStringEnum<TriggerEvent>
{
    private TriggerEvent(string value) : base(value)
    {
    }

    public static readonly TriggerEvent ContactCreated = new("contact.created");

    public static readonly TriggerEvent ContactUpdated = new("contact.updated");

    public static readonly TriggerEvent DealCreated = new("deal.created");

    public static readonly TriggerEvent DealUpdated = new("deal.updated");

    public static readonly TriggerEvent DealStageChanged = new("deal.stage_changed");

    public TResult Match<TResult>(Func<TResult> onContactCreated,
        Func<TResult> onContactUpdated,
        Func<TResult> onDealCreated,
        Func<TResult> onDealUpdated,
        Func<TResult> onDealStageChanged,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == ContactCreated => onContactCreated(),
            _ when this == ContactUpdated => onContactUpdated(),
            _ when this == DealCreated => onDealCreated(),
            _ when this == DealUpdated => onDealUpdated(),
            _ when this == DealStageChanged => onDealStageChanged(),
            _ => otherwise(Value)
        };

    public void Match(Action onContactCreated,
        Action onContactUpdated,
        Action onDealCreated,
        Action onDealUpdated,
        Action onDealStageChanged,
        Action<string> otherwise)
    {
        if (this == ContactCreated) onContactCreated();
        else if (this == ContactUpdated) onContactUpdated();
        else if (this == DealCreated) onDealCreated();
        else if (this == DealUpdated) onDealUpdated();
        else if (this == DealStageChanged) onDealStageChanged();
        else otherwise(Value);
    }
}
