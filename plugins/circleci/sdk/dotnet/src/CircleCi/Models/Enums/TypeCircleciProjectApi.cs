using System;
using System.Text.Json.Serialization;
using CircleCi.Core.Enum;

namespace CircleCi.Models.Enums;

/// <summary>
/// The type of checkout key
/// </summary>
[JsonConverter(typeof(StringEnumConverter<TypeCircleciProjectApi>))]
public sealed record TypeCircleciProjectApi : OpenStringEnum<TypeCircleciProjectApi>
{
    private TypeCircleciProjectApi(string value) : base(value)
    {
    }

    public static readonly TypeCircleciProjectApi DeployKey = new("deploy-key");

    public static readonly TypeCircleciProjectApi GithubUserKey = new("github-user-key");

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
