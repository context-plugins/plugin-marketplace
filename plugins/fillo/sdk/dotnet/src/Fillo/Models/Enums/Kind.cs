using System;
using System.Text.Json.Serialization;
using Fillo.Core.Enum;

namespace Fillo.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Kind>))]
public sealed record Kind : OpenStringEnum<Kind>
{
    private Kind(string value) : base(value)
    {
    }

    public static readonly Kind Webhook = new("webhook");

    public static readonly Kind Integration = new("integration");

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
