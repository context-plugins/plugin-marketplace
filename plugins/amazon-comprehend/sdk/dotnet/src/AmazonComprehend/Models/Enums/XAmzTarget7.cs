using System;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Enum;

namespace AmazonComprehend.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget7>))]
public sealed record XAmzTarget7 : OpenStringEnum<XAmzTarget7>
{
    private XAmzTarget7(string value) : base(value)
    {
    }

    public static readonly XAmzTarget7 Comprehend20171127ContainsPiiEntities = new(
        "Comprehend_20171127.ContainsPiiEntities");

    public TResult Match<TResult>(Func<TResult> onComprehend20171127ContainsPiiEntities,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Comprehend20171127ContainsPiiEntities => onComprehend20171127ContainsPiiEntities(),
            _ => otherwise(Value)
        };

    public void Match(Action onComprehend20171127ContainsPiiEntities, Action<string> otherwise)
    {
        if (this == Comprehend20171127ContainsPiiEntities) onComprehend20171127ContainsPiiEntities();
        else otherwise(Value);
    }
}
