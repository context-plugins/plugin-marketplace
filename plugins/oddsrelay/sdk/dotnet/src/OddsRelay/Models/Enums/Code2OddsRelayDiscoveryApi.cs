using System;
using System.Text.Json.Serialization;
using OddsRelay.Core.Enum;

namespace OddsRelay.Models.Enums;

/// <summary>
/// Stable machine code; branch on this, never on <c>message</c>.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Code2OddsRelayDiscoveryApi>))]
public sealed record Code2OddsRelayDiscoveryApi : OpenStringEnum<Code2OddsRelayDiscoveryApi>
{
    private Code2OddsRelayDiscoveryApi(string value) : base(value)
    {
    }

    public static readonly Code2OddsRelayDiscoveryApi MissingApiKey = new("missing_api_key");

    public static readonly Code2OddsRelayDiscoveryApi InvalidApiKey = new("invalid_api_key");

    public static readonly Code2OddsRelayDiscoveryApi RevokedApiKey = new("revoked_api_key");

    public static readonly Code2OddsRelayDiscoveryApi ExpiredApiKey = new("expired_api_key");

    public static readonly Code2OddsRelayDiscoveryApi PausedApiKey = new("paused_api_key");

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
