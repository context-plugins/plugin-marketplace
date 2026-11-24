using System;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Enum;

namespace AmazonComprehend.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget11>))]
public sealed record XAmzTarget11 : OpenStringEnum<XAmzTarget11>
{
    private XAmzTarget11(string value) : base(value)
    {
    }

    public static readonly XAmzTarget11 Comprehend20171127DetectPiiEntities = new(
        "Comprehend_20171127.DetectPiiEntities");

    public TResult Match<TResult>(Func<TResult> onComprehend20171127DetectPiiEntities,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Comprehend20171127DetectPiiEntities => onComprehend20171127DetectPiiEntities(),
            _ => otherwise(Value)
        };

    public void Match(Action onComprehend20171127DetectPiiEntities, Action<string> otherwise)
    {
        if (this == Comprehend20171127DetectPiiEntities) onComprehend20171127DetectPiiEntities();
        else otherwise(Value);
    }
}
