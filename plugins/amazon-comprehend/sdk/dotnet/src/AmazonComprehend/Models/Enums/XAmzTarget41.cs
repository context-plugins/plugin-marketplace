using System;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Enum;

namespace AmazonComprehend.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget41>))]
public sealed record XAmzTarget41 : OpenStringEnum<XAmzTarget41>
{
    private XAmzTarget41(string value) : base(value)
    {
    }

    public static readonly XAmzTarget41 Comprehend20171127StartDocumentClassificationJob = new(
        "Comprehend_20171127.StartDocumentClassificationJob");

    public TResult Match<TResult>(Func<TResult> onComprehend20171127StartDocumentClassificationJob,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this ==
                Comprehend20171127StartDocumentClassificationJob => onComprehend20171127StartDocumentClassificationJob(),
            _ => otherwise(Value)
        };

    public void Match(Action onComprehend20171127StartDocumentClassificationJob, Action<string> otherwise)
    {
        if (this ==
            Comprehend20171127StartDocumentClassificationJob) onComprehend20171127StartDocumentClassificationJob();
        else otherwise(Value);
    }
}
