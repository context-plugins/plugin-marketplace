using System;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Enum;

namespace AmazonComprehend.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget9>))]
public sealed record XAmzTarget9 : OpenStringEnum<XAmzTarget9>
{
    private XAmzTarget9(string value) : base(value)
    {
    }

    public static readonly XAmzTarget9 Comprehend20171127DetectEntities = new("Comprehend_20171127.DetectEntities");

    public TResult Match<TResult>(Func<TResult> onComprehend20171127DetectEntities, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Comprehend20171127DetectEntities => onComprehend20171127DetectEntities(),
            _ => otherwise(Value)
        };

    public void Match(Action onComprehend20171127DetectEntities, Action<string> otherwise)
    {
        if (this == Comprehend20171127DetectEntities) onComprehend20171127DetectEntities();
        else otherwise(Value);
    }
}
