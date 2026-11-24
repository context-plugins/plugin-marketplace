using System;
using System.Text.Json.Serialization;
using Postscript.Core.Enum;

namespace Postscript.Models.Enums;

/// <summary>
/// Webhook subscription event type.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Event>))]
public sealed record Event : OpenStringEnum<Event>
{
    private Event(string value) : base(value)
    {
    }

    public static readonly Event ShopTest = new("shop.test");

    public static readonly Event ShopIncomingMessage = new("shop.incoming_message");

    public static readonly Event ShopSubscriberOptIn = new("shop.subscriber.opt_in");

    public static readonly Event ShopSubscriberOptOut = new("shop.subscriber.opt_out");

    public static readonly Event ShopShopEmailCollected = new("shop.shop.email_collected");

    public TResult Match<TResult>(Func<TResult> onShopTest,
        Func<TResult> onShopIncomingMessage,
        Func<TResult> onShopSubscriberOptIn,
        Func<TResult> onShopSubscriberOptOut,
        Func<TResult> onShopShopEmailCollected,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == ShopTest => onShopTest(),
            _ when this == ShopIncomingMessage => onShopIncomingMessage(),
            _ when this == ShopSubscriberOptIn => onShopSubscriberOptIn(),
            _ when this == ShopSubscriberOptOut => onShopSubscriberOptOut(),
            _ when this == ShopShopEmailCollected => onShopShopEmailCollected(),
            _ => otherwise(Value)
        };

    public void Match(Action onShopTest,
        Action onShopIncomingMessage,
        Action onShopSubscriberOptIn,
        Action onShopSubscriberOptOut,
        Action onShopShopEmailCollected,
        Action<string> otherwise)
    {
        if (this == ShopTest) onShopTest();
        else if (this == ShopIncomingMessage) onShopIncomingMessage();
        else if (this == ShopSubscriberOptIn) onShopSubscriberOptIn();
        else if (this == ShopSubscriberOptOut) onShopSubscriberOptOut();
        else if (this == ShopShopEmailCollected) onShopShopEmailCollected();
        else otherwise(Value);
    }
}
