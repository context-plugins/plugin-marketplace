using System;
using System.Text.Json.Serialization;
using AgentReady.Core.Enum;

namespace AgentReady.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Code>))]
public sealed record Code : OpenStringEnum<Code>
{
    private Code(string value) : base(value)
    {
    }

    public static readonly Code NoResults = new("NO_RESULTS");

    public static readonly Code InvalidQuery = new("INVALID_QUERY");

    public static readonly Code RateLimited = new("RATE_LIMITED");

    public static readonly Code Timeout = new("TIMEOUT");

    public static readonly Code Internal = new("INTERNAL");

    public TResult Match<TResult>(Func<TResult> onNoResults,
        Func<TResult> onInvalidQuery,
        Func<TResult> onRateLimited,
        Func<TResult> onTimeout,
        Func<TResult> onInternal,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == NoResults => onNoResults(),
            _ when this == InvalidQuery => onInvalidQuery(),
            _ when this == RateLimited => onRateLimited(),
            _ when this == Timeout => onTimeout(),
            _ when this == Internal => onInternal(),
            _ => otherwise(Value)
        };

    public void Match(Action onNoResults,
        Action onInvalidQuery,
        Action onRateLimited,
        Action onTimeout,
        Action onInternal,
        Action<string> otherwise)
    {
        if (this == NoResults) onNoResults();
        else if (this == InvalidQuery) onInvalidQuery();
        else if (this == RateLimited) onRateLimited();
        else if (this == Timeout) onTimeout();
        else if (this == Internal) onInternal();
        else otherwise(Value);
    }
}
