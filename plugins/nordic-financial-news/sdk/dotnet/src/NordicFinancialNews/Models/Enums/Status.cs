using System;
using System.Text.Json.Serialization;
using NordicFinancialNews.Core.Enum;

namespace NordicFinancialNews.Models.Enums;

/// <summary>
/// Event lifecycle status. <c>scheduled</c> is upcoming; <c>published</c> means the event has occurred (events flip ~2 days after their date); <c>cancelled</c> means the issuer withdrew it. List endpoints return <c>scheduled</c> + <c>published</c> and exclude <c>cancelled</c> by default. Pass the <c>status</c> query parameter to filter (e.g. <c>status=cancelled</c>).
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Status>))]
public sealed record Status : OpenStringEnum<Status>
{
    private Status(string value) : base(value)
    {
    }

    public static readonly Status Scheduled = new("scheduled");

    public static readonly Status Published = new("published");

    public static readonly Status Cancelled = new("cancelled");

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
