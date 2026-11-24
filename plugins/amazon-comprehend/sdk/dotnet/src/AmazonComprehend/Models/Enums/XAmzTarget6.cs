using System;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Enum;

namespace AmazonComprehend.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget6>))]
public sealed record XAmzTarget6 : OpenStringEnum<XAmzTarget6>
{
    private XAmzTarget6(string value) : base(value)
    {
    }

    public static readonly XAmzTarget6 Comprehend20171127ClassifyDocument = new("Comprehend_20171127.ClassifyDocument");

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
