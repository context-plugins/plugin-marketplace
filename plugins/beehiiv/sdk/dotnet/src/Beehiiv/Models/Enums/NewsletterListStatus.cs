using System;
using System.Text.Json.Serialization;
using Beehiiv.Core.Enum;

namespace Beehiiv.Models.Enums;

/// <summary>
/// The status of the newsletter list.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<NewsletterListStatus>))]
public sealed record NewsletterListStatus : OpenStringEnum<NewsletterListStatus>
{
    private NewsletterListStatus(string value) : base(value)
    {
    }

    public static readonly NewsletterListStatus Draft = new("draft");

    public static readonly NewsletterListStatus Active = new("active");

    public static readonly NewsletterListStatus Archived = new("archived");

    public TResult Match<TResult>(Func<TResult> onDraft,
        Func<TResult> onActive,
        Func<TResult> onArchived,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Draft => onDraft(),
            _ when this == Active => onActive(),
            _ when this == Archived => onArchived(),
            _ => otherwise(Value)
        };

    public void Match(Action onDraft, Action onActive, Action onArchived, Action<string> otherwise)
    {
        if (this == Draft) onDraft();
        else if (this == Active) onActive();
        else if (this == Archived) onArchived();
        else otherwise(Value);
    }
}
