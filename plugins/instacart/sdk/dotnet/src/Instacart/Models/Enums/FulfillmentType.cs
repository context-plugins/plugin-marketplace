using System;
using System.Text.Json.Serialization;
using Instacart.Core.Enum;

namespace Instacart.Models.Enums;

/// <summary>
/// The type of fulfillment for this service option.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<FulfillmentType>))]
public sealed record FulfillmentType : OpenStringEnum<FulfillmentType>
{
    private FulfillmentType(string value) : base(value)
    {
    }

    public static readonly FulfillmentType Delivery = new("delivery");

    public static readonly FulfillmentType Pickup = new("pickup");

    public static readonly FulfillmentType LastMile = new("last_mile");

    public TResult Match<TResult>(Func<TResult> onDelivery,
        Func<TResult> onPickup,
        Func<TResult> onLastMile,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Delivery => onDelivery(),
            _ when this == Pickup => onPickup(),
            _ when this == LastMile => onLastMile(),
            _ => otherwise(Value)
        };

    public void Match(Action onDelivery, Action onPickup, Action onLastMile, Action<string> otherwise)
    {
        if (this == Delivery) onDelivery();
        else if (this == Pickup) onPickup();
        else if (this == LastMile) onLastMile();
        else otherwise(Value);
    }
}
