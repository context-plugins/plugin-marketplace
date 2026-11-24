using System;
using System.Text.Json.Serialization;
using Perigon.Core.Enum;

namespace Perigon.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Type1>))]
public sealed record Type1 : OpenStringEnum<Type1>
{
    private Type1(string value) : base(value)
    {
    }

    public static readonly Type1 Email = new("EMAIL");

    public static readonly Type1 Fastn = new("FASTN");

    public static readonly Type1 Webhook = new("WEBHOOK");

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
