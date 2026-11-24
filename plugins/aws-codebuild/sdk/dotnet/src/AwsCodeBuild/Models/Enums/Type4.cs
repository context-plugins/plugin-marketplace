using System;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Enum;

namespace AwsCodeBuild.Models.Enums;

/// <summary>
/// The authorization type to use. Valid options are OAUTH, CODECONNECTIONS, or SECRETS_MANAGER.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Type4>))]
public sealed record Type4 : OpenStringEnum<Type4>
{
    private Type4(string value) : base(value)
    {
    }

    public static readonly Type4 Oauth = new("OAUTH");

    public static readonly Type4 Codeconnections = new("CODECONNECTIONS");

    public static readonly Type4 SecretsManager = new("SECRETS_MANAGER");

    public TResult Match<TResult>(Func<TResult> onOauth,
        Func<TResult> onCodeconnections,
        Func<TResult> onSecretsManager,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Oauth => onOauth(),
            _ when this == Codeconnections => onCodeconnections(),
            _ when this == SecretsManager => onSecretsManager(),
            _ => otherwise(Value)
        };

    public void Match(Action onOauth, Action onCodeconnections, Action onSecretsManager, Action<string> otherwise)
    {
        if (this == Oauth) onOauth();
        else if (this == Codeconnections) onCodeconnections();
        else if (this == SecretsManager) onSecretsManager();
        else otherwise(Value);
    }
}
