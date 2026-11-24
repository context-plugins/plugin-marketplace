using System;
using System.Text.Json.Serialization;
using CircleCi.Core.Enum;

namespace CircleCi.Models.Enums;

/// <summary>
/// The type of checkout key to create
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Type1CircleCiRestApiV1SshKeyApi>))]
public sealed record Type1CircleCiRestApiV1SshKeyApi : OpenStringEnum<Type1CircleCiRestApiV1SshKeyApi>
{
    private Type1CircleCiRestApiV1SshKeyApi(string value) : base(value)
    {
    }

    public static readonly Type1CircleCiRestApiV1SshKeyApi DeployKey = new("deploy-key");

    public static readonly Type1CircleCiRestApiV1SshKeyApi GithubUserKey = new("github-user-key");

    public TResult Match<TResult>(Func<TResult> onDeployKey,
        Func<TResult> onGithubUserKey,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == DeployKey => onDeployKey(),
            _ when this == GithubUserKey => onGithubUserKey(),
            _ => otherwise(Value)
        };

    public void Match(Action onDeployKey, Action onGithubUserKey, Action<string> otherwise)
    {
        if (this == DeployKey) onDeployKey();
        else if (this == GithubUserKey) onGithubUserKey();
        else otherwise(Value);
    }
}
