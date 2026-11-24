using System;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Enum;

namespace AmazonComprehend.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget77>))]
public sealed record XAmzTarget77 : OpenStringEnum<XAmzTarget77>
{
    private XAmzTarget77(string value) : base(value)
    {
    }

    public static readonly XAmzTarget77 Comprehend20171127ListEntityRecognizerSummaries = new(
        "Comprehend_20171127.ListEntityRecognizerSummaries");

    public TResult Match<TResult>(Func<TResult> onComprehend20171127ListEntityRecognizerSummaries,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this ==
                Comprehend20171127ListEntityRecognizerSummaries => onComprehend20171127ListEntityRecognizerSummaries(),
            _ => otherwise(Value)
        };

    public void Match(Action onComprehend20171127ListEntityRecognizerSummaries, Action<string> otherwise)
    {
        if (this ==
            Comprehend20171127ListEntityRecognizerSummaries) onComprehend20171127ListEntityRecognizerSummaries();
        else otherwise(Value);
    }
}
