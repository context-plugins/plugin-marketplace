using System;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Enum;

namespace AmazonComprehend.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget83>))]
public sealed record XAmzTarget83 : OpenStringEnum<XAmzTarget83>
{
    private XAmzTarget83(string value) : base(value)
    {
    }

    public static readonly XAmzTarget83 Comprehend20171127UntagResource = new("Comprehend_20171127.UntagResource");

    public TResult Match<TResult>(Func<TResult> onComprehend20171127UntagResource, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Comprehend20171127UntagResource => onComprehend20171127UntagResource(),
            _ => otherwise(Value)
        };

    public void Match(Action onComprehend20171127UntagResource, Action<string> otherwise)
    {
        if (this == Comprehend20171127UntagResource) onComprehend20171127UntagResource();
        else otherwise(Value);
    }
}
