using System;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Enum;

namespace AwsCodeBuild.Models.Enums;

/// <summary>
/// The type of authentication used by the credentials. Valid options are OAUTH, BASIC_AUTH, PERSONAL_ACCESS_TOKEN, CODECONNECTIONS, or SECRETS_MANAGER.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<AuthType1>))]
public sealed record AuthType1 : OpenStringEnum<AuthType1>
{
    private AuthType1(string value) : base(value)
    {
    }

    public static readonly AuthType1 Oauth = new("OAUTH");

    public static readonly AuthType1 BasicAuth = new("BASIC_AUTH");

    public static readonly AuthType1 PersonalAccessToken = new("PERSONAL_ACCESS_TOKEN");

    public static readonly AuthType1 Codeconnections = new("CODECONNECTIONS");

    public static readonly AuthType1 SecretsManager = new("SECRETS_MANAGER");

    public TResult Match<TResult>(Func<TResult> onOauth,
        Func<TResult> onBasicAuth,
        Func<TResult> onPersonalAccessToken,
        Func<TResult> onCodeconnections,
        Func<TResult> onSecretsManager,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Oauth => onOauth(),
            _ when this == BasicAuth => onBasicAuth(),
            _ when this == PersonalAccessToken => onPersonalAccessToken(),
            _ when this == Codeconnections => onCodeconnections(),
            _ when this == SecretsManager => onSecretsManager(),
            _ => otherwise(Value)
        };

    public void Match(Action onOauth,
        Action onBasicAuth,
        Action onPersonalAccessToken,
        Action onCodeconnections,
        Action onSecretsManager,
        Action<string> otherwise)
    {
        if (this == Oauth) onOauth();
        else if (this == BasicAuth) onBasicAuth();
        else if (this == PersonalAccessToken) onPersonalAccessToken();
        else if (this == Codeconnections) onCodeconnections();
        else if (this == SecretsManager) onSecretsManager();
        else otherwise(Value);
    }
}
