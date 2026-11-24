using System;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Enum;

namespace AmazonComprehend.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget35>))]
public sealed record XAmzTarget35 : OpenStringEnum<XAmzTarget35>
{
    private XAmzTarget35(string value) : base(value)
    {
    }

    public static readonly XAmzTarget35 Comprehend20171127UpdateFlywheel = new("Comprehend_20171127.UpdateFlywheel");

    public TResult Match<TResult>(Func<TResult> onComprehend20171127UpdateFlywheel, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Comprehend20171127UpdateFlywheel => onComprehend20171127UpdateFlywheel(),
            _ => otherwise(Value)
        };

    public void Match(Action onComprehend20171127UpdateFlywheel, Action<string> otherwise)
    {
        if (this == Comprehend20171127UpdateFlywheel) onComprehend20171127UpdateFlywheel();
        else otherwise(Value);
    }
}
