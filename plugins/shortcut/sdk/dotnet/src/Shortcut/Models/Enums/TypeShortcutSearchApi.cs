using System;
using System.Text.Json.Serialization;
using Shortcut.Core.Enum;

namespace Shortcut.Models.Enums;

/// <summary>
/// The service this Identity is for.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<TypeShortcutSearchApi>))]
public sealed record TypeShortcutSearchApi : OpenStringEnum<TypeShortcutSearchApi>
{
    private TypeShortcutSearchApi(string value) : base(value)
    {
    }

    public static readonly TypeShortcutSearchApi Slack = new("slack");

    public static readonly TypeShortcutSearchApi Github = new("github");

    public static readonly TypeShortcutSearchApi Gitlab = new("gitlab");

    public static readonly TypeShortcutSearchApi Bitbucket = new("bitbucket");

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
