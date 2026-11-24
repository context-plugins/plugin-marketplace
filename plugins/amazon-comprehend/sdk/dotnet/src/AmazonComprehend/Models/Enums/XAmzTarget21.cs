using System;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Enum;

namespace AmazonComprehend.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget21>))]
public sealed record XAmzTarget21 : OpenStringEnum<XAmzTarget21>
{
    private XAmzTarget21(string value) : base(value)
    {
    }

    public static readonly XAmzTarget21 Comprehend20171127ListDocumentClassifiers = new(
        "Comprehend_20171127.ListDocumentClassifiers");

    public TResult Match<TResult>(Func<TResult> onComprehend20171127ListDocumentClassifiers,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Comprehend20171127ListDocumentClassifiers => onComprehend20171127ListDocumentClassifiers(),
            _ => otherwise(Value)
        };

    public void Match(Action onComprehend20171127ListDocumentClassifiers, Action<string> otherwise)
    {
        if (this == Comprehend20171127ListDocumentClassifiers) onComprehend20171127ListDocumentClassifiers();
        else otherwise(Value);
    }
}
