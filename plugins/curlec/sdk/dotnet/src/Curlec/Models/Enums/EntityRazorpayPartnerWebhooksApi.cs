using System;
using System.Text.Json.Serialization;
using Curlec.Core.Enum;

namespace Curlec.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<EntityRazorpayPartnerWebhooksApi>))]
public sealed record EntityRazorpayPartnerWebhooksApi : OpenStringEnum<EntityRazorpayPartnerWebhooksApi>
{
    private EntityRazorpayPartnerWebhooksApi(string value) : base(value)
    {
    }

    public static readonly EntityRazorpayPartnerWebhooksApi Webhook = new("webhook");

    public TResult Match<TResult>(Func<TResult> onWebhook, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Webhook => onWebhook(),
            _ => otherwise(Value)
        };

    public void Match(Action onWebhook, Action<string> otherwise)
    {
        if (this == Webhook) onWebhook();
        else otherwise(Value);
    }
}
