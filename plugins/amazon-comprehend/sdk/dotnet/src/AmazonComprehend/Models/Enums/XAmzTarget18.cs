using System;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Enum;

namespace AmazonComprehend.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget18>))]
public sealed record XAmzTarget18 : OpenStringEnum<XAmzTarget18>
{
    private XAmzTarget18(string value) : base(value)
    {
    }

    public static readonly XAmzTarget18 Comprehend20171127CreateDocumentClassifier = new(
        "Comprehend_20171127.CreateDocumentClassifier");

    public TResult Match<TResult>(Func<TResult> onComprehend20171127CreateDocumentClassifier,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Comprehend20171127CreateDocumentClassifier => onComprehend20171127CreateDocumentClassifier(),
            _ => otherwise(Value)
        };

    public void Match(Action onComprehend20171127CreateDocumentClassifier, Action<string> otherwise)
    {
        if (this == Comprehend20171127CreateDocumentClassifier) onComprehend20171127CreateDocumentClassifier();
        else otherwise(Value);
    }
}
