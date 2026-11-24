using System;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Enum;

namespace AmazonComprehend.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget30>))]
public sealed record XAmzTarget30 : OpenStringEnum<XAmzTarget30>
{
    private XAmzTarget30(string value) : base(value)
    {
    }

    public static readonly XAmzTarget30 Comprehend20171127ListEntityRecognizers = new(
        "Comprehend_20171127.ListEntityRecognizers");

    public TResult Match<TResult>(Func<TResult> onComprehend20171127ListEntityRecognizers,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Comprehend20171127ListEntityRecognizers => onComprehend20171127ListEntityRecognizers(),
            _ => otherwise(Value)
        };

    public void Match(Action onComprehend20171127ListEntityRecognizers, Action<string> otherwise)
    {
        if (this == Comprehend20171127ListEntityRecognizers) onComprehend20171127ListEntityRecognizers();
        else otherwise(Value);
    }
}
