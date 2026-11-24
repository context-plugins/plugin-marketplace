using System;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Enum;

namespace AmazonComprehend.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget2>))]
public sealed record XAmzTarget2 : OpenStringEnum<XAmzTarget2>
{
    private XAmzTarget2(string value) : base(value)
    {
    }

    public static readonly XAmzTarget2 Comprehend20171127BatchDetectKeyPhrases = new(
        "Comprehend_20171127.BatchDetectKeyPhrases");

    public TResult Match<TResult>(Func<TResult> onComprehend20171127BatchDetectKeyPhrases,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Comprehend20171127BatchDetectKeyPhrases => onComprehend20171127BatchDetectKeyPhrases(),
            _ => otherwise(Value)
        };

    public void Match(Action onComprehend20171127BatchDetectKeyPhrases, Action<string> otherwise)
    {
        if (this == Comprehend20171127BatchDetectKeyPhrases) onComprehend20171127BatchDetectKeyPhrases();
        else otherwise(Value);
    }
}
