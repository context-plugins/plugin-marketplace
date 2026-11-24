using System;
using System.Text.Json.Serialization;
using CompSniper.Core.Enum;

namespace CompSniper.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<ShippingType>))]
public sealed record ShippingType : OpenStringEnum<ShippingType>
{
    private ShippingType(string value) : base(value)
    {
    }

    public static readonly ShippingType Free = new("free");

    public static readonly ShippingType Paid = new("paid");

    public static readonly ShippingType Pickup = new("pickup");

    public static readonly ShippingType Unknown = new("unknown");

    public TResult Match<TResult>(Func<TResult> onFree,
        Func<TResult> onPaid,
        Func<TResult> onPickup,
        Func<TResult> onUnknown,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Free => onFree(),
            _ when this == Paid => onPaid(),
            _ when this == Pickup => onPickup(),
            _ when this == Unknown => onUnknown(),
            _ => otherwise(Value)
        };

    public void Match(Action onFree, Action onPaid, Action onPickup, Action onUnknown, Action<string> otherwise)
    {
        if (this == Free) onFree();
        else if (this == Paid) onPaid();
        else if (this == Pickup) onPickup();
        else if (this == Unknown) onUnknown();
        else otherwise(Value);
    }
}
