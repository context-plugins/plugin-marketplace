using System;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Enum;

namespace AmazonComprehend.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget34>))]
public sealed record XAmzTarget34 : OpenStringEnum<XAmzTarget34>
{
    private XAmzTarget34(string value) : base(value)
    {
    }

    public static readonly XAmzTarget34 Comprehend20171127ListFlywheels = new("Comprehend_20171127.ListFlywheels");

    public TResult Match<TResult>(Func<TResult> onComprehend20171127ListFlywheels, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Comprehend20171127ListFlywheels => onComprehend20171127ListFlywheels(),
            _ => otherwise(Value)
        };

    public void Match(Action onComprehend20171127ListFlywheels, Action<string> otherwise)
    {
        if (this == Comprehend20171127ListFlywheels) onComprehend20171127ListFlywheels();
        else otherwise(Value);
    }
}
