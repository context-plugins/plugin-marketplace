using System;
using System.Text.Json.Serialization;
using Curlec.Core.Enum;

namespace Curlec.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<EntityRazorpaySubscriptionsApi>))]
public sealed record EntityRazorpaySubscriptionsApi : OpenStringEnum<EntityRazorpaySubscriptionsApi>
{
    private EntityRazorpaySubscriptionsApi(string value) : base(value)
    {
    }

    public static readonly EntityRazorpaySubscriptionsApi Subscription = new("subscription");

    public TResult Match<TResult>(Func<TResult> onSubscription, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Subscription => onSubscription(),
            _ => otherwise(Value)
        };

    public void Match(Action onSubscription, Action<string> otherwise)
    {
        if (this == Subscription) onSubscription();
        else otherwise(Value);
    }
}
