using System;
using System.Text.Json.Serialization;
using S1.Core.Enum;

namespace S1.Models.Enums;

/// <summary>
/// What a <c>github</c> result is: a repository, an issue, a pull request, or a discussion. Only present for <c>search_service: "github"</c>.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Kind>))]
public sealed record Kind : OpenStringEnum<Kind>
{
    private Kind(string value) : base(value)
    {
    }

    public static readonly Kind Repo = new("repo");

    public static readonly Kind Issue = new("issue");

    public static readonly Kind Pr = new("pr");

    public static readonly Kind Discussion = new("discussion");

    public TResult Match<TResult>(Func<TResult> onRepo,
        Func<TResult> onIssue,
        Func<TResult> onPr,
        Func<TResult> onDiscussion,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Repo => onRepo(),
            _ when this == Issue => onIssue(),
            _ when this == Pr => onPr(),
            _ when this == Discussion => onDiscussion(),
            _ => otherwise(Value)
        };

    public void Match(Action onRepo, Action onIssue, Action onPr, Action onDiscussion, Action<string> otherwise)
    {
        if (this == Repo) onRepo();
        else if (this == Issue) onIssue();
        else if (this == Pr) onPr();
        else if (this == Discussion) onDiscussion();
        else otherwise(Value);
    }
}
