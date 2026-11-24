using System;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Enum;

namespace AmazonRekognition.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget1AmazonRekognitionStreamProcessorApi>))]
public sealed record XAmzTarget1AmazonRekognitionStreamProcessorApi : OpenStringEnum<XAmzTarget1AmazonRekognitionStreamProcessorApi>
{
    private XAmzTarget1AmazonRekognitionStreamProcessorApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget1AmazonRekognitionStreamProcessorApi RekognitionServiceDeleteStreamProcessor = new(
        "RekognitionService.DeleteStreamProcessor");

    public TResult Match<TResult>(Func<TResult> onRekognitionServiceDeleteStreamProcessor,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == RekognitionServiceDeleteStreamProcessor => onRekognitionServiceDeleteStreamProcessor(),
            _ => otherwise(Value)
        };

    public void Match(Action onRekognitionServiceDeleteStreamProcessor, Action<string> otherwise)
    {
        if (this == RekognitionServiceDeleteStreamProcessor) onRekognitionServiceDeleteStreamProcessor();
        else otherwise(Value);
    }
}
