using System;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Enum;

namespace AmazonRekognition.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget2AmazonRekognitionStreamProcessorApi>))]
public sealed record XAmzTarget2AmazonRekognitionStreamProcessorApi : OpenStringEnum<XAmzTarget2AmazonRekognitionStreamProcessorApi>
{
    private XAmzTarget2AmazonRekognitionStreamProcessorApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget2AmazonRekognitionStreamProcessorApi RekognitionServiceDescribeStreamProcessor = new(
        "RekognitionService.DescribeStreamProcessor");

    public TResult Match<TResult>(Func<TResult> onRekognitionServiceDescribeStreamProcessor,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == RekognitionServiceDescribeStreamProcessor => onRekognitionServiceDescribeStreamProcessor(),
            _ => otherwise(Value)
        };

    public void Match(Action onRekognitionServiceDescribeStreamProcessor, Action<string> otherwise)
    {
        if (this == RekognitionServiceDescribeStreamProcessor) onRekognitionServiceDescribeStreamProcessor();
        else otherwise(Value);
    }
}
