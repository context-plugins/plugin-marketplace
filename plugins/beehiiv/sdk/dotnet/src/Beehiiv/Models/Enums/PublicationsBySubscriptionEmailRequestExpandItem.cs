using System;
using System.Text.Json.Serialization;
using Beehiiv.Core.Enum;

namespace Beehiiv.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<PublicationsBySubscriptionEmailRequestExpandItem>))]
public sealed record PublicationsBySubscriptionEmailRequestExpandItem : OpenStringEnum<PublicationsBySubscriptionEmailRequestExpandItem>
{
    private PublicationsBySubscriptionEmailRequestExpandItem(string value) : base(value)
    {
    }

    public static readonly PublicationsBySubscriptionEmailRequestExpandItem Subscription = new("subscription");

    public static readonly PublicationsBySubscriptionEmailRequestExpandItem Publication = new("publication");

    public static readonly PublicationsBySubscriptionEmailRequestExpandItem SubscriptionCustomFields = new(
        "subscription_custom_fields");

    public TResult Match<TResult>(Func<TResult> onSubscription,
        Func<TResult> onPublication,
        Func<TResult> onSubscriptionCustomFields,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Subscription => onSubscription(),
            _ when this == Publication => onPublication(),
            _ when this == SubscriptionCustomFields => onSubscriptionCustomFields(),
            _ => otherwise(Value)
        };

    public void Match(Action onSubscription,
        Action onPublication,
        Action onSubscriptionCustomFields,
        Action<string> otherwise)
    {
        if (this == Subscription) onSubscription();
        else if (this == Publication) onPublication();
        else if (this == SubscriptionCustomFields) onSubscriptionCustomFields();
        else otherwise(Value);
    }
}
