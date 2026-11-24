using System;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Enum;

namespace AmazonComprehend.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget31>))]
public sealed record XAmzTarget31 : OpenStringEnum<XAmzTarget31>
{
    private XAmzTarget31(string value) : base(value)
    {
    }

    public static readonly XAmzTarget31 Comprehend20171127CreateFlywheel = new("Comprehend_20171127.CreateFlywheel");

    public TResult Match<TResult>(Func<TResult> onComprehend20171127CreateFlywheel, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Comprehend20171127CreateFlywheel => onComprehend20171127CreateFlywheel(),
            _ => otherwise(Value)
        };

    public void Match(Action onComprehend20171127CreateFlywheel, Action<string> otherwise)
    {
        if (this == Comprehend20171127CreateFlywheel) onComprehend20171127CreateFlywheel();
        else otherwise(Value);
    }
}
