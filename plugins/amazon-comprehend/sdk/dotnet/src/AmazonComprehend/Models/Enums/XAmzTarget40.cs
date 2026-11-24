using System;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Enum;

namespace AmazonComprehend.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget40>))]
public sealed record XAmzTarget40 : OpenStringEnum<XAmzTarget40>
{
    private XAmzTarget40(string value) : base(value)
    {
    }

    public static readonly XAmzTarget40 Comprehend20171127ListDocumentClassificationJobs = new(
        "Comprehend_20171127.ListDocumentClassificationJobs");

    public TResult Match<TResult>(Func<TResult> onComprehend20171127ListDocumentClassificationJobs,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this ==
                Comprehend20171127ListDocumentClassificationJobs => onComprehend20171127ListDocumentClassificationJobs(),
            _ => otherwise(Value)
        };

    public void Match(Action onComprehend20171127ListDocumentClassificationJobs, Action<string> otherwise)
    {
        if (this ==
            Comprehend20171127ListDocumentClassificationJobs) onComprehend20171127ListDocumentClassificationJobs();
        else otherwise(Value);
    }
}
