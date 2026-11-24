using System;
using System.Text.Json.Serialization;
using OddsRelay.Core.Enum;

namespace OddsRelay.Models.Enums;

/// <summary>
/// Stable machine code; branch on this, never on <c>message</c>.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Code4>))]
public sealed record Code4 : OpenStringEnum<Code4>
{
    private Code4(string value) : base(value)
    {
    }

    public static readonly Code4 MissingApiKey = new("missing_api_key");

    public static readonly Code4 InvalidApiKey = new("invalid_api_key");

    public static readonly Code4 RevokedApiKey = new("revoked_api_key");

    public static readonly Code4 ExpiredApiKey = new("expired_api_key");

    public static readonly Code4 PausedApiKey = new("paused_api_key");

    public TResult Match<TResult>(Func<TResult> onMissingApiKey,
        Func<TResult> onInvalidApiKey,
        Func<TResult> onRevokedApiKey,
        Func<TResult> onExpiredApiKey,
        Func<TResult> onPausedApiKey,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == MissingApiKey => onMissingApiKey(),
            _ when this == InvalidApiKey => onInvalidApiKey(),
            _ when this == RevokedApiKey => onRevokedApiKey(),
            _ when this == ExpiredApiKey => onExpiredApiKey(),
            _ when this == PausedApiKey => onPausedApiKey(),
            _ => otherwise(Value)
        };

    public void Match(Action onMissingApiKey,
        Action onInvalidApiKey,
        Action onRevokedApiKey,
        Action onExpiredApiKey,
        Action onPausedApiKey,
        Action<string> otherwise)
    {
        if (this == MissingApiKey) onMissingApiKey();
        else if (this == InvalidApiKey) onInvalidApiKey();
        else if (this == RevokedApiKey) onRevokedApiKey();
        else if (this == ExpiredApiKey) onExpiredApiKey();
        else if (this == PausedApiKey) onPausedApiKey();
        else otherwise(Value);
    }
}
