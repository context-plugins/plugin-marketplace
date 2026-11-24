using System;
using System.Text.Json.Serialization;
using RelmCrm.Core.Enum;

namespace RelmCrm.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<ObjectRelmCrmWebhooksApi>))]
public sealed record ObjectRelmCrmWebhooksApi : OpenStringEnum<ObjectRelmCrmWebhooksApi>
{
    private ObjectRelmCrmWebhooksApi(string value) : base(value)
    {
    }

    public static readonly ObjectRelmCrmWebhooksApi Webhook = new("webhook");

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
