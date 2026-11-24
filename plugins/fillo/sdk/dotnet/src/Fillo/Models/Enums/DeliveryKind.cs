using System;
using System.Text.Json.Serialization;
using Fillo.Core.Enum;

namespace Fillo.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<DeliveryKind>))]
public sealed record DeliveryKind : OpenStringEnum<DeliveryKind>
{
    private DeliveryKind(string value) : base(value)
    {
    }

    public static readonly DeliveryKind Webhook = new("webhook");

    public static readonly DeliveryKind Integration = new("integration");

    public TResult Match<TResult>(Func<TResult> onWebhook,
        Func<TResult> onIntegration,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Webhook => onWebhook(),
            _ when this == Integration => onIntegration(),
            _ => otherwise(Value)
        };

    public void Match(Action onWebhook, Action onIntegration, Action<string> otherwise)
    {
        if (this == Webhook) onWebhook();
        else if (this == Integration) onIntegration();
        else otherwise(Value);
    }
}
