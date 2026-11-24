using System;
using System.Text.Json.Serialization;
using CircleCi.Core.Enum;

namespace CircleCi.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<VcsType>))]
public sealed record VcsType : OpenStringEnum<VcsType>
{
    private VcsType(string value) : base(value)
    {
    }

    public static readonly VcsType Github = new("github");

    public static readonly VcsType Bitbucket = new("bitbucket");

    public TResult Match<TResult>(Func<TResult> onGithub, Func<TResult> onBitbucket, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Github => onGithub(),
            _ when this == Bitbucket => onBitbucket(),
            _ => otherwise(Value)
        };

    public void Match(Action onGithub, Action onBitbucket, Action<string> otherwise)
    {
        if (this == Github) onGithub();
        else if (this == Bitbucket) onBitbucket();
        else otherwise(Value);
    }
}
