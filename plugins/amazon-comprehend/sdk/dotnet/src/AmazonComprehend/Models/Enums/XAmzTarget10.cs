using System;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Enum;

namespace AmazonComprehend.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget10>))]
public sealed record XAmzTarget10 : OpenStringEnum<XAmzTarget10>
{
    private XAmzTarget10(string value) : base(value)
    {
    }

    public static readonly XAmzTarget10 Comprehend20171127DetectKeyPhrases = new(
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
