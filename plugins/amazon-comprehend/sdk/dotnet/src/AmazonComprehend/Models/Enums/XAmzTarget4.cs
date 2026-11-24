using System;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Enum;

namespace AmazonComprehend.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget4>))]
public sealed record XAmzTarget4 : OpenStringEnum<XAmzTarget4>
{
    private XAmzTarget4(string value) : base(value)
    {
    }

    public static readonly XAmzTarget4 Comprehend20171127BatchDetectSyntax = new(
        "Comprehend_20171127.BatchDetectSyntax");

    public TResult Match<TResult>(Func<TResult> onComprehend20171127BatchDetectSyntax,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Comprehend20171127BatchDetectSyntax => onComprehend20171127BatchDetectSyntax(),
            _ => otherwise(Value)
        };

    public void Match(Action onComprehend20171127BatchDetectSyntax, Action<string> otherwise)
    {
        if (this == Comprehend20171127BatchDetectSyntax) onComprehend20171127BatchDetectSyntax();
        else otherwise(Value);
    }
}
