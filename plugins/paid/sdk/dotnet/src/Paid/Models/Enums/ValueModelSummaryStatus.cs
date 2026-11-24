using System;
using System.Text.Json.Serialization;
using Paid.Core.Enum;

namespace Paid.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<ValueModelSummaryStatus>))]
public sealed record ValueModelSummaryStatus : OpenStringEnum<ValueModelSummaryStatus>
{
    private ValueModelSummaryStatus(string value) : base(value)
    {
    }

    public static readonly ValueModelSummaryStatus Draft = new("draft");

    public static readonly ValueModelSummaryStatus Active = new("active");

    public static readonly ValueModelSummaryStatus Archived = new("archived");

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
