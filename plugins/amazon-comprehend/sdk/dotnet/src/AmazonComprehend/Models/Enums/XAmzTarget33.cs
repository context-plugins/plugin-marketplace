using System;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Enum;

namespace AmazonComprehend.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget33>))]
public sealed record XAmzTarget33 : OpenStringEnum<XAmzTarget33>
{
    private XAmzTarget33(string value) : base(value)
    {
    }

    public static readonly XAmzTarget33 Comprehend20171127DescribeFlywheel = new(
        "Comprehend_20171127.DescribeFlywheel");

    public TResult Match<TResult>(Func<TResult> onComprehend20171127DescribeFlywheel,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Comprehend20171127DescribeFlywheel => onComprehend20171127DescribeFlywheel(),
            _ => otherwise(Value)
        };

    public void Match(Action onComprehend20171127DescribeFlywheel, Action<string> otherwise)
    {
        if (this == Comprehend20171127DescribeFlywheel) onComprehend20171127DescribeFlywheel();
        else otherwise(Value);
    }
}
