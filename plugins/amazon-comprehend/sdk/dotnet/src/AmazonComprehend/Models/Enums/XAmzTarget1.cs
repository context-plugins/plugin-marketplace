using System;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Enum;

namespace AmazonComprehend.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget1>))]
public sealed record XAmzTarget1 : OpenStringEnum<XAmzTarget1>
{
    private XAmzTarget1(string value) : base(value)
    {
    }

    public static readonly XAmzTarget1 Comprehend20171127BatchDetectEntities = new(
        "Comprehend_20171127.BatchDetectEntities");

    public TResult Match<TResult>(Func<TResult> onComprehend20171127BatchDetectEntities,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Comprehend20171127BatchDetectEntities => onComprehend20171127BatchDetectEntities(),
            _ => otherwise(Value)
        };

    public void Match(Action onComprehend20171127BatchDetectEntities, Action<string> otherwise)
    {
        if (this == Comprehend20171127BatchDetectEntities) onComprehend20171127BatchDetectEntities();
        else otherwise(Value);
    }
}
