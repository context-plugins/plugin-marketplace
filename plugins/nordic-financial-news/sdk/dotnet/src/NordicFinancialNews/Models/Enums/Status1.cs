using System;
using System.Text.Json.Serialization;
using NordicFinancialNews.Core.Enum;

namespace NordicFinancialNews.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Status1>))]
public sealed record Status1 : OpenStringEnum<Status1>
{
    private Status1(string value) : base(value)
    {
    }

    public static readonly Status1 Scheduled = new("scheduled");

    public static readonly Status1 Published = new("published");

    public static readonly Status1 Cancelled = new("cancelled");

    public TResult Match<TResult>(Func<TResult> onScheduled,
        Func<TResult> onPublished,
        Func<TResult> onCancelled,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Scheduled => onScheduled(),
            _ when this == Published => onPublished(),
            _ when this == Cancelled => onCancelled(),
            _ => otherwise(Value)
        };

    public void Match(Action onScheduled, Action onPublished, Action onCancelled, Action<string> otherwise)
    {
        if (this == Scheduled) onScheduled();
        else if (this == Published) onPublished();
        else if (this == Cancelled) onCancelled();
        else otherwise(Value);
    }
}
