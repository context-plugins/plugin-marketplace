using System;
using System.Text.Json.Serialization;
using Shortcut.Core.Enum;

namespace Shortcut.Models.Enums;

/// <summary>
/// The service this Identity is for.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Type1>))]
public sealed record Type1 : OpenStringEnum<Type1>
{
    private Type1(string value) : base(value)
    {
    }

    public static readonly Type1 Slack = new("slack");

    public static readonly Type1 Github = new("github");

    public static readonly Type1 Gitlab = new("gitlab");

    public static readonly Type1 Bitbucket = new("bitbucket");

    public TResult Match<TResult>(Func<TResult> onSlack,
        Func<TResult> onGithub,
        Func<TResult> onGitlab,
        Func<TResult> onBitbucket,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Slack => onSlack(),
            _ when this == Github => onGithub(),
            _ when this == Gitlab => onGitlab(),
            _ when this == Bitbucket => onBitbucket(),
            _ => otherwise(Value)
        };

    public void Match(Action onSlack, Action onGithub, Action onGitlab, Action onBitbucket, Action<string> otherwise)
    {
        if (this == Slack) onSlack();
        else if (this == Github) onGithub();
        else if (this == Gitlab) onGitlab();
        else if (this == Bitbucket) onBitbucket();
        else otherwise(Value);
    }
}
