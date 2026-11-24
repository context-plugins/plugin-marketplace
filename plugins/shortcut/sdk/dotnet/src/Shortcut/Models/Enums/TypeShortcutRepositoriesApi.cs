using System;
using System.Text.Json.Serialization;
using Shortcut.Core.Enum;

namespace Shortcut.Models.Enums;

/// <summary>
/// The VCS provider for the Repository.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<TypeShortcutRepositoriesApi>))]
public sealed record TypeShortcutRepositoriesApi : OpenStringEnum<TypeShortcutRepositoriesApi>
{
    private TypeShortcutRepositoriesApi(string value) : base(value)
    {
    }

    public static readonly TypeShortcutRepositoriesApi Github = new("github");

    public static readonly TypeShortcutRepositoriesApi Gitlab = new("gitlab");

    public static readonly TypeShortcutRepositoriesApi Bitbucket = new("bitbucket");

    public TResult Match<TResult>(Func<TResult> onGithub,
        Func<TResult> onGitlab,
        Func<TResult> onBitbucket,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Github => onGithub(),
            _ when this == Gitlab => onGitlab(),
            _ when this == Bitbucket => onBitbucket(),
            _ => otherwise(Value)
        };

    public void Match(Action onGithub, Action onGitlab, Action onBitbucket, Action<string> otherwise)
    {
        if (this == Github) onGithub();
        else if (this == Gitlab) onGitlab();
        else if (this == Bitbucket) onBitbucket();
        else otherwise(Value);
    }
}
