using System;
using System.Text.Json.Serialization;
using OddsRelay.Core.Enum;

namespace OddsRelay.Models.Enums;

/// <summary>
/// Stable machine code; branch on this, never on <c>message</c>.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<CodeOddsRelayDiscoveryApi>))]
public sealed record CodeOddsRelayDiscoveryApi : OpenStringEnum<CodeOddsRelayDiscoveryApi>
{
    private CodeOddsRelayDiscoveryApi(string value) : base(value)
    {
    }

    public static readonly CodeOddsRelayDiscoveryApi TooManyRequests = new("too_many_requests");

    public static readonly CodeOddsRelayDiscoveryApi TooManyFromAddress = new("too_many_from_address");

    public TResult Match<TResult>(Func<TResult> onTooManyRequests,
        Func<TResult> onTooManyFromAddress,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == TooManyRequests => onTooManyRequests(),
            _ when this == TooManyFromAddress => onTooManyFromAddress(),
            _ => otherwise(Value)
        };

    public void Match(Action onTooManyRequests, Action onTooManyFromAddress, Action<string> otherwise)
    {
        if (this == TooManyRequests) onTooManyRequests();
        else if (this == TooManyFromAddress) onTooManyFromAddress();
        else otherwise(Value);
    }
}
