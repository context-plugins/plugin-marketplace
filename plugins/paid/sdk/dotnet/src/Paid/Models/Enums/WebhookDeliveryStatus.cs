using System;
using System.Text.Json.Serialization;
using Paid.Core.Enum;

namespace Paid.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<WebhookDeliveryStatus>))]
public sealed record WebhookDeliveryStatus : OpenStringEnum<WebhookDeliveryStatus>
{
    private WebhookDeliveryStatus(string value) : base(value)
    {
    }

    public static readonly WebhookDeliveryStatus Success = new("success");

    public static readonly WebhookDeliveryStatus Failed = new("failed");

    public TResult Match<TResult>(Func<TResult> onSuccess, Func<TResult> onFailed, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Success => onSuccess(),
            _ when this == Failed => onFailed(),
            _ => otherwise(Value)
        };

    public void Match(Action onSuccess, Action onFailed, Action<string> otherwise)
    {
        if (this == Success) onSuccess();
        else if (this == Failed) onFailed();
        else otherwise(Value);
    }
}
