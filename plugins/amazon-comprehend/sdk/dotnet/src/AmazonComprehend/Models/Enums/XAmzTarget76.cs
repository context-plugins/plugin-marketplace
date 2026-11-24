using System;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Enum;

namespace AmazonComprehend.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget76>))]
public sealed record XAmzTarget76 : OpenStringEnum<XAmzTarget76>
{
    private XAmzTarget76(string value) : base(value)
    {
    }

    public static readonly XAmzTarget76 Comprehend20171127ListDocumentClassifierSummaries = new(
        "Comprehend_20171127.ListDocumentClassifierSummaries");

    public TResult Match<TResult>(Func<TResult> onComprehend20171127ListDocumentClassifierSummaries,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this ==
                Comprehend20171127ListDocumentClassifierSummaries => onComprehend20171127ListDocumentClassifierSummaries(),
            _ => otherwise(Value)
        };

    public void Match(Action onComprehend20171127ListDocumentClassifierSummaries, Action<string> otherwise)
    {
        if (this ==
            Comprehend20171127ListDocumentClassifierSummaries) onComprehend20171127ListDocumentClassifierSummaries();
        else otherwise(Value);
    }
}
