using System;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Enum;

namespace AmazonComprehend.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget79>))]
public sealed record XAmzTarget79 : OpenStringEnum<XAmzTarget79>
{
    private XAmzTarget79(string value) : base(value)
    {
    }

    public static readonly XAmzTarget79 Comprehend20171127ListTagsForResource = new(
        "Comprehend_20171127.ListTagsForResource");

    public TResult Match<TResult>(Func<TResult> onComprehend20171127ListTagsForResource,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Comprehend20171127ListTagsForResource => onComprehend20171127ListTagsForResource(),
            _ => otherwise(Value)
        };

    public void Match(Action onComprehend20171127ListTagsForResource, Action<string> otherwise)
    {
        if (this == Comprehend20171127ListTagsForResource) onComprehend20171127ListTagsForResource();
        else otherwise(Value);
    }
}
