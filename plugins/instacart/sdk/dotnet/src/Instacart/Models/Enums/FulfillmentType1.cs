using System;
using System.Text.Json.Serialization;
using Instacart.Core.Enum;

namespace Instacart.Models.Enums;

/// <summary>
/// The fulfillment type of the order.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<FulfillmentType1>))]
public sealed record FulfillmentType1 : OpenStringEnum<FulfillmentType1>
{
    private FulfillmentType1(string value) : base(value)
    {
    }

    public static readonly FulfillmentType1 Delivery = new("delivery");

    public static readonly FulfillmentType1 Pickup = new("pickup");

    public static readonly FulfillmentType1 LastMile = new("last_mile");

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
