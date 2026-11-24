using System;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Enum;

namespace AmazonRekognition.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget6AmazonRekognitionStreamProcessorApi>))]
public sealed record XAmzTarget6AmazonRekognitionStreamProcessorApi : OpenStringEnum<XAmzTarget6AmazonRekognitionStreamProcessorApi>
{
    private XAmzTarget6AmazonRekognitionStreamProcessorApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget6AmazonRekognitionStreamProcessorApi RekognitionServiceUpdateStreamProcessor = new(
        "RekognitionService.UpdateStreamProcessor");

    public TResult Match<TResult>(Func<TResult> onRekognitionServiceUpdateStreamProcessor,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == RekognitionServiceUpdateStreamProcessor => onRekognitionServiceUpdateStreamProcessor(),
            _ => otherwise(Value)
        };

    public void Match(Action onRekognitionServiceUpdateStreamProcessor, Action<string> otherwise)
    {
        if (this == RekognitionServiceUpdateStreamProcessor) onRekognitionServiceUpdateStreamProcessor();
        else otherwise(Value);
    }
}
