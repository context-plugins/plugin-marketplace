using System;
using System.Text.Json.Serialization;
using Beehiiv.Core.Enum;

namespace Beehiiv.Models.Enums;

/// <summary>
/// Valid status values when updating a newsletter list. draft is not permitted.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<NewsletterListWritableStatus>))]
public sealed record NewsletterListWritableStatus : OpenStringEnum<NewsletterListWritableStatus>
{
    private NewsletterListWritableStatus(string value) : base(value)
    {
    }

    public static readonly NewsletterListWritableStatus Active = new("active");

    public static readonly NewsletterListWritableStatus Archived = new("archived");

    public TResult Match<TResult>(Func<TResult> onActive, Func<TResult> onArchived, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Active => onActive(),
            _ when this == Archived => onArchived(),
            _ => otherwise(Value)
        };

    public void Match(Action onActive, Action onArchived, Action<string> otherwise)
    {
        if (this == Active) onActive();
        else if (this == Archived) onArchived();
        else otherwise(Value);
    }
}
