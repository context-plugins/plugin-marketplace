using System;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Enum;

namespace AmazonComprehend.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget32>))]
public sealed record XAmzTarget32 : OpenStringEnum<XAmzTarget32>
{
    private XAmzTarget32(string value) : base(value)
    {
    }

    public static readonly XAmzTarget32 Comprehend20171127DeleteFlywheel = new("Comprehend_20171127.DeleteFlywheel");

    public TResult Match<TResult>(Func<TResult> onComprehend20171127DeleteFlywheel, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Comprehend20171127DeleteFlywheel => onComprehend20171127DeleteFlywheel(),
            _ => otherwise(Value)
        };

    public void Match(Action onComprehend20171127DeleteFlywheel, Action<string> otherwise)
    {
        if (this == Comprehend20171127DeleteFlywheel) onComprehend20171127DeleteFlywheel();
        else otherwise(Value);
    }
}
