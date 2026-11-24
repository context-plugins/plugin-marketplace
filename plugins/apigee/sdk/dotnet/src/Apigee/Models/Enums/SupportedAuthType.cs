using System;
using System.Text.Json.Serialization;
using Apigee.Core.Enum;

namespace Apigee.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<SupportedAuthType>))]
public sealed record SupportedAuthType : OpenStringEnum<SupportedAuthType>
{
    private SupportedAuthType(string value) : base(value)
    {
    }

    public static readonly SupportedAuthType AuthTypeUnspecified = new("AUTH_TYPE_UNSPECIFIED");

    public static readonly SupportedAuthType NoAuth = new("NO_AUTH");

    public static readonly SupportedAuthType GoogleServiceAccount = new("GOOGLE_SERVICE_ACCOUNT");

    public static readonly SupportedAuthType UserPassword = new("USER_PASSWORD");

    public static readonly SupportedAuthType ApiKey = new("API_KEY");

    public static readonly SupportedAuthType Oauth2ClientCredentials = new("OAUTH2_CLIENT_CREDENTIALS");

    public TResult Match<TResult>(Func<TResult> onAuthTypeUnspecified,
        Func<TResult> onNoAuth,
        Func<TResult> onGoogleServiceAccount,
        Func<TResult> onUserPassword,
        Func<TResult> onApiKey,
        Func<TResult> onOauth2ClientCredentials,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AuthTypeUnspecified => onAuthTypeUnspecified(),
            _ when this == NoAuth => onNoAuth(),
            _ when this == GoogleServiceAccount => onGoogleServiceAccount(),
            _ when this == UserPassword => onUserPassword(),
            _ when this == ApiKey => onApiKey(),
            _ when this == Oauth2ClientCredentials => onOauth2ClientCredentials(),
            _ => otherwise(Value)
        };

    public void Match(Action onAuthTypeUnspecified,
        Action onNoAuth,
        Action onGoogleServiceAccount,
        Action onUserPassword,
        Action onApiKey,
        Action onOauth2ClientCredentials,
        Action<string> otherwise)
    {
        if (this == AuthTypeUnspecified) onAuthTypeUnspecified();
        else if (this == NoAuth) onNoAuth();
        else if (this == GoogleServiceAccount) onGoogleServiceAccount();
        else if (this == UserPassword) onUserPassword();
        else if (this == ApiKey) onApiKey();
        else if (this == Oauth2ClientCredentials) onOauth2ClientCredentials();
        else otherwise(Value);
    }
}
