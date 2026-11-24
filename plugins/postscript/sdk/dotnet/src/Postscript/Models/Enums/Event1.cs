using System;
using System.Text.Json.Serialization;
using Postscript.Core.Enum;

namespace Postscript.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Event1>))]
public sealed record Event1 : OpenStringEnum<Event1>
{
    private Event1(string value) : base(value)
    {
    }

    public static readonly Event1 ShopTest = new("shop.test");

    public static readonly Event1 ShopIncomingMessage = new("shop.incoming_message");

    public static readonly Event1 ShopSubscriberOptIn = new("shop.subscriber.opt_in");

    public static readonly Event1 ShopSubscriberOptOut = new("shop.subscriber.opt_out");

    public static readonly Event1 ShopEmailCollected = new("shop.email_collected");

    public TResult Match<TResult>(Func<TResult> onShopTest,
        Func<TResult> onShopIncomingMessage,
        Func<TResult> onShopSubscriberOptIn,
        Func<TResult> onShopSubscriberOptOut,
        Func<TResult> onShopEmailCollected,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == ShopTest => onShopTest(),
            _ when this == ShopIncomingMessage => onShopIncomingMessage(),
            _ when this == ShopSubscriberOptIn => onShopSubscriberOptIn(),
            _ when this == ShopSubscriberOptOut => onShopSubscriberOptOut(),
            _ when this == ShopEmailCollected => onShopEmailCollected(),
            _ => otherwise(Value)
        };

    public void Match(Action onShopTest,
        Action onShopIncomingMessage,
        Action onShopSubscriberOptIn,
        Action onShopSubscriberOptOut,
        Action onShopEmailCollected,
        Action<string> otherwise)
    {
        if (this == ShopTest) onShopTest();
        else if (this == ShopIncomingMessage) onShopIncomingMessage();
        else if (this == ShopSubscriberOptIn) onShopSubscriberOptIn();
        else if (this == ShopSubscriberOptOut) onShopSubscriberOptOut();
        else if (this == ShopEmailCollected) onShopEmailCollected();
        else otherwise(Value);
    }
}
