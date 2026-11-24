using System;
using System.Text.Json.Serialization;
using Paid.Core.Enum;

namespace Paid.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<CustomViewSummaryStatus>))]
public sealed record CustomViewSummaryStatus : OpenStringEnum<CustomViewSummaryStatus>
{
    private CustomViewSummaryStatus(string value) : base(value)
    {
    }

    public static readonly CustomViewSummaryStatus Draft = new("DRAFT");

    public static readonly CustomViewSummaryStatus Published = new("PUBLISHED");

    public TResult Match<TResult>(Func<TResult> onDraft, Func<TResult> onPublished, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Draft => onDraft(),
            _ when this == Published => onPublished(),
            _ => otherwise(Value)
        };

    public void Match(Action onDraft, Action onPublished, Action<string> otherwise)
    {
        if (this == Draft) onDraft();
        else if (this == Published) onPublished();
        else otherwise(Value);
    }
}
