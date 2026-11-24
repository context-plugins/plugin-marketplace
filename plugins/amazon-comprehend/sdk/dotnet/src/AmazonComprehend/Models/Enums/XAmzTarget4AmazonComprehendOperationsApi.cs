using System;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Enum;

namespace AmazonComprehend.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget4AmazonComprehendOperationsApi>))]
public sealed record XAmzTarget4AmazonComprehendOperationsApi : OpenStringEnum<XAmzTarget4AmazonComprehendOperationsApi>
{
    private XAmzTarget4AmazonComprehendOperationsApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget4AmazonComprehendOperationsApi Comprehend20171127DetectKeyPhrases = new(
        "Comprehend_20171127.DetectKeyPhrases");

    public TResult Match<TResult>(Func<TResult> onComprehend20171127DetectKeyPhrases,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Comprehend20171127DetectKeyPhrases => onComprehend20171127DetectKeyPhrases(),
            _ => otherwise(Value)
        };

    public void Match(Action onComprehend20171127DetectKeyPhrases, Action<string> otherwise)
    {
        if (this == Comprehend20171127DetectKeyPhrases) onComprehend20171127DetectKeyPhrases();
        else otherwise(Value);
    }
}
