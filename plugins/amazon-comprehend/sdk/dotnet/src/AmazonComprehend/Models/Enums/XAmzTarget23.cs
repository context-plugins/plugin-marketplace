using System;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Enum;

namespace AmazonComprehend.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget23>))]
public sealed record XAmzTarget23 : OpenStringEnum<XAmzTarget23>
{
    private XAmzTarget23(string value) : base(value)
    {
    }

    public static readonly XAmzTarget23 Comprehend20171127DeleteEndpoint = new("Comprehend_20171127.DeleteEndpoint");

    public TResult Match<TResult>(Func<TResult> onComprehend20171127DeleteEndpoint, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Comprehend20171127DeleteEndpoint => onComprehend20171127DeleteEndpoint(),
            _ => otherwise(Value)
        };

    public void Match(Action onComprehend20171127DeleteEndpoint, Action<string> otherwise)
    {
        if (this == Comprehend20171127DeleteEndpoint) onComprehend20171127DeleteEndpoint();
        else otherwise(Value);
    }
}
