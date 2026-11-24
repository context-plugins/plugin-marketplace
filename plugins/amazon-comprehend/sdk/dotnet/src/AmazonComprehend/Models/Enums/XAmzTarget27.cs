using System;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Enum;

namespace AmazonComprehend.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget27>))]
public sealed record XAmzTarget27 : OpenStringEnum<XAmzTarget27>
{
    private XAmzTarget27(string value) : base(value)
    {
    }

    public static readonly XAmzTarget27 Comprehend20171127CreateEntityRecognizer = new(
        "Comprehend_20171127.CreateEntityRecognizer");

    public TResult Match<TResult>(Func<TResult> onComprehend20171127CreateEntityRecognizer,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Comprehend20171127CreateEntityRecognizer => onComprehend20171127CreateEntityRecognizer(),
            _ => otherwise(Value)
        };

    public void Match(Action onComprehend20171127CreateEntityRecognizer, Action<string> otherwise)
    {
        if (this == Comprehend20171127CreateEntityRecognizer) onComprehend20171127CreateEntityRecognizer();
        else otherwise(Value);
    }
}
