using System;
using System.Text.Json.Serialization;
using CircleCi.Core.Enum;

namespace CircleCi.Models.Enums;

/// <summary>
/// The type of checkout key to create
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Type1>))]
public sealed record Type1 : OpenStringEnum<Type1>
{
    private Type1(string value) : base(value)
    {
    }

    public static readonly Type1 DeployKey = new("deploy-key");

    public static readonly Type1 UserKey = new("user-key");

    public TResult Match<TResult>(Func<TResult> onDeployKey,
        Func<TResult> onUserKey,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == DeployKey => onDeployKey(),
            _ when this == UserKey => onUserKey(),
            _ => otherwise(Value)
        };

    public void Match(Action onDeployKey, Action onUserKey, Action<string> otherwise)
    {
        if (this == DeployKey) onDeployKey();
        else if (this == UserKey) onUserKey();
        else otherwise(Value);
    }
}
