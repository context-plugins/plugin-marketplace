using System;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Enum;

namespace AwsCodeBuild.Models.Enums;

/// <summary>
/// The type of authentication used to connect to a GitHub, GitHub Enterprise, GitLab, GitLab Self Managed, or Bitbucket repository. An OAUTH connection is not supported by the API and must be created using the CodeBuild console.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<AuthType>))]
public sealed record AuthType : OpenStringEnum<AuthType>
{
    private AuthType(string value) : base(value)
    {
    }

    public static readonly AuthType Oauth = new("OAUTH");

    public static readonly AuthType BasicAuth = new("BASIC_AUTH");

    public static readonly AuthType PersonalAccessToken = new("PERSONAL_ACCESS_TOKEN");

    public static readonly AuthType Codeconnections = new("CODECONNECTIONS");

    public static readonly AuthType SecretsManager = new("SECRETS_MANAGER");

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
