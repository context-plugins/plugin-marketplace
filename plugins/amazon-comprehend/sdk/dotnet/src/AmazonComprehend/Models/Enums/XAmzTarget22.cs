using System;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Enum;

namespace AmazonComprehend.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget22>))]
public sealed record XAmzTarget22 : OpenStringEnum<XAmzTarget22>
{
    private XAmzTarget22(string value) : base(value)
    {
    }

    public static readonly XAmzTarget22 Comprehend20171127CreateEndpoint = new("Comprehend_20171127.CreateEndpoint");

    public TResult Match<TResult>(Func<TResult> onComprehend20171127CreateEndpoint, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Comprehend20171127CreateEndpoint => onComprehend20171127CreateEndpoint(),
            _ => otherwise(Value)
        };

    public void Match(Action onComprehend20171127CreateEndpoint, Action<string> otherwise)
    {
        if (this == Comprehend20171127CreateEndpoint) onComprehend20171127CreateEndpoint();
        else otherwise(Value);
    }
}
