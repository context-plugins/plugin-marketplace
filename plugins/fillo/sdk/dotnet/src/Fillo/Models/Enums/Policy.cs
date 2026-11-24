using System;
using System.Text.Json.Serialization;
using Fillo.Core.Enum;

namespace Fillo.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Policy>))]
public sealed record Policy : OpenStringEnum<Policy>
{
    private Policy(string value) : base(value)
    {
    }

    public static readonly Policy PublishableKey = new("publishable_key");

    public static readonly Policy TrustedOnly = new("trusted_only");

    public TResult Match<TResult>(Func<TResult> onPublishableKey,
        Func<TResult> onTrustedOnly,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == PublishableKey => onPublishableKey(),
            _ when this == TrustedOnly => onTrustedOnly(),
            _ => otherwise(Value)
        };

    public void Match(Action onPublishableKey, Action onTrustedOnly, Action<string> otherwise)
    {
        if (this == PublishableKey) onPublishableKey();
        else if (this == TrustedOnly) onTrustedOnly();
        else otherwise(Value);
    }
}
