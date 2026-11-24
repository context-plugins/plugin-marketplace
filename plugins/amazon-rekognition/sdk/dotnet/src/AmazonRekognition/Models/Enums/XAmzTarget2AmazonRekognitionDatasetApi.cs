using System;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Enum;

namespace AmazonRekognition.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget2AmazonRekognitionDatasetApi>))]
public sealed record XAmzTarget2AmazonRekognitionDatasetApi : OpenStringEnum<XAmzTarget2AmazonRekognitionDatasetApi>
{
    private XAmzTarget2AmazonRekognitionDatasetApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget2AmazonRekognitionDatasetApi RekognitionServiceDescribeDataset = new(
        "RekognitionService.DescribeDataset");

    public TResult Match<TResult>(Func<TResult> onRekognitionServiceDescribeDataset, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == RekognitionServiceDescribeDataset => onRekognitionServiceDescribeDataset(),
            _ => otherwise(Value)
        };

    public void Match(Action onRekognitionServiceDescribeDataset, Action<string> otherwise)
    {
        if (this == RekognitionServiceDescribeDataset) onRekognitionServiceDescribeDataset();
        else otherwise(Value);
    }
}
