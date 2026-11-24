using System;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Enum;

namespace AmazonComprehend.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget26>))]
public sealed record XAmzTarget26 : OpenStringEnum<XAmzTarget26>
{
    private XAmzTarget26(string value) : base(value)
    {
    }

    public static readonly XAmzTarget26 Comprehend20171127UpdateEndpoint = new("Comprehend_20171127.UpdateEndpoint");

    public TResult Match<TResult>(Func<TResult> onComprehend20171127UpdateEndpoint, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Comprehend20171127UpdateEndpoint => onComprehend20171127UpdateEndpoint(),
            _ => otherwise(Value)
        };

    public void Match(Action onComprehend20171127UpdateEndpoint, Action<string> otherwise)
    {
        if (this == Comprehend20171127UpdateEndpoint) onComprehend20171127UpdateEndpoint();
        else otherwise(Value);
    }
}
