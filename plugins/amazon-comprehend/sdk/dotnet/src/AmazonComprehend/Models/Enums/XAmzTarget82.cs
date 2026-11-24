using System;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Enum;

namespace AmazonComprehend.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget82>))]
public sealed record XAmzTarget82 : OpenStringEnum<XAmzTarget82>
{
    private XAmzTarget82(string value) : base(value)
    {
    }

    public static readonly XAmzTarget82 Comprehend20171127TagResource = new("Comprehend_20171127.TagResource");

    public TResult Match<TResult>(Func<TResult> onComprehend20171127TagResource, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Comprehend20171127TagResource => onComprehend20171127TagResource(),
            _ => otherwise(Value)
        };

    public void Match(Action onComprehend20171127TagResource, Action<string> otherwise)
    {
        if (this == Comprehend20171127TagResource) onComprehend20171127TagResource();
        else otherwise(Value);
    }
}
