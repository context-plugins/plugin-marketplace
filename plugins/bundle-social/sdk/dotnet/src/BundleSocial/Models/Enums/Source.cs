using System;
using System.Text.Json.Serialization;
using BundleSocial.Core.Enum;

namespace BundleSocial.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Source>))]
public sealed record Source : OpenStringEnum<Source>
{
    private Source(string value) : base(value)
    {
    }

    public static readonly Source PrivateReply = new("PRIVATE_REPLY");

    public static readonly Source Dm = new("DM");

    public static readonly Source Webhook = new("WEBHOOK");

    public static readonly Source Api = new("API");

    public static readonly Source Echo = new("ECHO");

    public TResult Match<TResult>(Func<TResult> onPrivateReply,
        Func<TResult> onDm,
        Func<TResult> onWebhook,
        Func<TResult> onApi,
        Func<TResult> onEcho,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == PrivateReply => onPrivateReply(),
            _ when this == Dm => onDm(),
            _ when this == Webhook => onWebhook(),
            _ when this == Api => onApi(),
            _ when this == Echo => onEcho(),
            _ => otherwise(Value)
        };

    public void Match(Action onPrivateReply,
        Action onDm,
        Action onWebhook,
        Action onApi,
        Action onEcho,
        Action<string> otherwise)
    {
        if (this == PrivateReply) onPrivateReply();
        else if (this == Dm) onDm();
        else if (this == Webhook) onWebhook();
        else if (this == Api) onApi();
        else if (this == Echo) onEcho();
        else otherwise(Value);
    }
}
