using System;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Enum;

namespace AmazonComprehend.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget25>))]
public sealed record XAmzTarget25 : OpenStringEnum<XAmzTarget25>
{
    private XAmzTarget25(string value) : base(value)
    {
    }

    public static readonly XAmzTarget25 Comprehend20171127ListEndpoints = new("Comprehend_20171127.ListEndpoints");

    public TResult Match<TResult>(Func<TResult> onComprehend20171127ListEndpoints, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Comprehend20171127ListEndpoints => onComprehend20171127ListEndpoints(),
            _ => otherwise(Value)
        };

    public void Match(Action onComprehend20171127ListEndpoints, Action<string> otherwise)
    {
        if (this == Comprehend20171127ListEndpoints) onComprehend20171127ListEndpoints();
        else otherwise(Value);
    }
}
