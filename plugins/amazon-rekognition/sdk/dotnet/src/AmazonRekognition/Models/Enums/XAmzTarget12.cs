using System;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Enum;

namespace AmazonRekognition.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget12>))]
public sealed record XAmzTarget12 : OpenStringEnum<XAmzTarget12>
{
    private XAmzTarget12(string value) : base(value)
    {
    }

    public static readonly XAmzTarget12 RekognitionServiceDescribeCollection = new(
        "RekognitionService.DescribeCollection");

    public TResult Match<TResult>(Func<TResult> onRekognitionServiceDescribeCollection,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == RekognitionServiceDescribeCollection => onRekognitionServiceDescribeCollection(),
            _ => otherwise(Value)
        };

    public void Match(Action onRekognitionServiceDescribeCollection, Action<string> otherwise)
    {
        if (this == RekognitionServiceDescribeCollection) onRekognitionServiceDescribeCollection();
        else otherwise(Value);
    }
}
