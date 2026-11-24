using System;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Enum;

namespace AmazonComprehend.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget13>))]
public sealed record XAmzTarget13 : OpenStringEnum<XAmzTarget13>
{
    private XAmzTarget13(string value) : base(value)
    {
    }

    public static readonly XAmzTarget13 Comprehend20171127DetectSyntax = new("Comprehend_20171127.DetectSyntax");

    public TResult Match<TResult>(Func<TResult> onComprehend20171127DetectSyntax, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Comprehend20171127DetectSyntax => onComprehend20171127DetectSyntax(),
            _ => otherwise(Value)
        };

    public void Match(Action onComprehend20171127DetectSyntax, Action<string> otherwise)
    {
        if (this == Comprehend20171127DetectSyntax) onComprehend20171127DetectSyntax();
        else otherwise(Value);
    }
}
