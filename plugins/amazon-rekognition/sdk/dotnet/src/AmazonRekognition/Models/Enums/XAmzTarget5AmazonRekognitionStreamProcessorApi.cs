using System;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Enum;

namespace AmazonRekognition.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget5AmazonRekognitionStreamProcessorApi>))]
public sealed record XAmzTarget5AmazonRekognitionStreamProcessorApi : OpenStringEnum<XAmzTarget5AmazonRekognitionStreamProcessorApi>
{
    private XAmzTarget5AmazonRekognitionStreamProcessorApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget5AmazonRekognitionStreamProcessorApi RekognitionServiceStopStreamProcessor = new(
        "RekognitionService.StopStreamProcessor");

    public TResult Match<TResult>(Func<TResult> onRekognitionServiceStopStreamProcessor,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == RekognitionServiceStopStreamProcessor => onRekognitionServiceStopStreamProcessor(),
            _ => otherwise(Value)
        };

    public void Match(Action onRekognitionServiceStopStreamProcessor, Action<string> otherwise)
    {
        if (this == RekognitionServiceStopStreamProcessor) onRekognitionServiceStopStreamProcessor();
        else otherwise(Value);
    }
}
