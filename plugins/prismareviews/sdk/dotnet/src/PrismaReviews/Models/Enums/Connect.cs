using System;
using System.Text.Json.Serialization;
using PrismaReviews.Core.Enum;

namespace PrismaReviews.Models.Enums;

/// <summary>
/// How <c>POST /v1/connections</c> connects it.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Connect>))]
public sealed record Connect : OpenStringEnum<Connect>
{
    private Connect(string value) : base(value)
    {
    }

    public static readonly Connect Oauth = new("oauth");

    public static readonly Connect Credentials = new("credentials");

    public static readonly Connect ListingUrl = new("listing_url");

    public TResult Match<TResult>(Func<TResult> onOauth,
        Func<TResult> onCredentials,
        Func<TResult> onListingUrl,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Oauth => onOauth(),
            _ when this == Credentials => onCredentials(),
            _ when this == ListingUrl => onListingUrl(),
            _ => otherwise(Value)
        };

    public void Match(Action onOauth, Action onCredentials, Action onListingUrl, Action<string> otherwise)
    {
        if (this == Oauth) onOauth();
        else if (this == Credentials) onCredentials();
        else if (this == ListingUrl) onListingUrl();
        else otherwise(Value);
    }
}
