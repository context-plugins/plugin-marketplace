using System;
using System.Text.Json.Serialization;
using Beehiiv.Core.Enum;

namespace Beehiiv.Models.Enums;

/// <summary>
/// The status of the newsletter list. Valid values are <c>active</c> and <c>archived</c>. Setting <c>draft</c> is not permitted.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<NewsletterListWritableStatus1>))]
public sealed record NewsletterListWritableStatus1 : OpenStringEnum<NewsletterListWritableStatus1>
{
    private NewsletterListWritableStatus1(string value) : base(value)
    {
    }

    public static readonly NewsletterListWritableStatus1 Active = new("active");

    public static readonly NewsletterListWritableStatus1 Archived = new("archived");

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
