using System;
using System.Text.Json.Serialization;
using Perigon.Core.Enum;

namespace Perigon.Models.Enums;

/// <summary>
/// Delivery channel type. API-managed contact points use WEBHOOK.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<TypeEnum>))]
public sealed record TypeEnum : OpenStringEnum<TypeEnum>
{
    private TypeEnum(string value) : base(value)
    {
    }

    public static readonly TypeEnum Email = new("EMAIL");

    public static readonly TypeEnum Fastn = new("FASTN");

    public static readonly TypeEnum Webhook = new("WEBHOOK");

    public TResult Match<TResult>(Func<TResult> onEmail,
        Func<TResult> onFastn,
        Func<TResult> onWebhook,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Email => onEmail(),
            _ when this == Fastn => onFastn(),
            _ when this == Webhook => onWebhook(),
            _ => otherwise(Value)
        };

    public void Match(Action onEmail, Action onFastn, Action onWebhook, Action<string> otherwise)
    {
        if (this == Email) onEmail();
        else if (this == Fastn) onFastn();
        else if (this == Webhook) onWebhook();
        else otherwise(Value);
    }
}
