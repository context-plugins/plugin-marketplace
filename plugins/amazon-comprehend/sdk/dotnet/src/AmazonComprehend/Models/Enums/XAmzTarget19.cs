using System;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Enum;

namespace AmazonComprehend.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget19>))]
public sealed record XAmzTarget19 : OpenStringEnum<XAmzTarget19>
{
    private XAmzTarget19(string value) : base(value)
    {
    }

    public static readonly XAmzTarget19 Comprehend20171127DeleteDocumentClassifier = new(
        "Comprehend_20171127.DeleteDocumentClassifier");

    public TResult Match<TResult>(Func<TResult> onComprehend20171127DeleteDocumentClassifier,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Comprehend20171127DeleteDocumentClassifier => onComprehend20171127DeleteDocumentClassifier(),
            _ => otherwise(Value)
        };

    public void Match(Action onComprehend20171127DeleteDocumentClassifier, Action<string> otherwise)
    {
        if (this == Comprehend20171127DeleteDocumentClassifier) onComprehend20171127DeleteDocumentClassifier();
        else otherwise(Value);
    }
}
