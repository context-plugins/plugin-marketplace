using System;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Enum;

namespace AmazonComprehend.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTargetAmazonComprehendOperationsApi>))]
public sealed record XAmzTargetAmazonComprehendOperationsApi : OpenStringEnum<XAmzTargetAmazonComprehendOperationsApi>
{
    private XAmzTargetAmazonComprehendOperationsApi(string value) : base(value)
    {
    }

    public static readonly XAmzTargetAmazonComprehendOperationsApi Comprehend20171127ClassifyDocument = new(
        "Comprehend_20171127.ClassifyDocument");

    public TResult Match<TResult>(Func<TResult> onComprehend20171127ClassifyDocument,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Comprehend20171127ClassifyDocument => onComprehend20171127ClassifyDocument(),
            _ => otherwise(Value)
        };

    public void Match(Action onComprehend20171127ClassifyDocument, Action<string> otherwise)
    {
        if (this == Comprehend20171127ClassifyDocument) onComprehend20171127ClassifyDocument();
        else otherwise(Value);
    }
}
