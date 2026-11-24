using System;
using System.Text.Json.Serialization;
using Curlec.Core.Enum;

namespace Curlec.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<OrderServiceType>))]
public sealed record OrderServiceType : OpenStringEnum<OrderServiceType>
{
    private OrderServiceType(string value) : base(value)
    {
    }

    public static readonly OrderServiceType DineIn = new("dine_in");

    public static readonly OrderServiceType Takeaway = new("takeaway");

    public static readonly OrderServiceType Delivery = new("delivery");

    public TResult Match<TResult>(Func<TResult> onDineIn,
        Func<TResult> onTakeaway,
        Func<TResult> onDelivery,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == DineIn => onDineIn(),
            _ when this == Takeaway => onTakeaway(),
            _ when this == Delivery => onDelivery(),
            _ => otherwise(Value)
        };

    public void Match(Action onDineIn, Action onTakeaway, Action onDelivery, Action<string> otherwise)
    {
        if (this == DineIn) onDineIn();
        else if (this == Takeaway) onTakeaway();
        else if (this == Delivery) onDelivery();
        else otherwise(Value);
    }
}
