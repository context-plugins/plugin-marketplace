using System;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Enum;

namespace AmazonRekognition.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTargetAmazonRekognitionStreamProcessorApi>))]
public sealed record XAmzTargetAmazonRekognitionStreamProcessorApi : OpenStringEnum<XAmzTargetAmazonRekognitionStreamProcessorApi>
{
    private XAmzTargetAmazonRekognitionStreamProcessorApi(string value) : base(value)
    {
    }

    public static readonly XAmzTargetAmazonRekognitionStreamProcessorApi RekognitionServiceCreateStreamProcessor = new(
        "RekognitionService.CreateStreamProcessor");

    public TResult Match<TResult>(Func<TResult> onRekognitionServiceCreateStreamProcessor,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == RekognitionServiceCreateStreamProcessor => onRekognitionServiceCreateStreamProcessor(),
            _ => otherwise(Value)
        };

    public void Match(Action onRekognitionServiceCreateStreamProcessor, Action<string> otherwise)
    {
        if (this == RekognitionServiceCreateStreamProcessor) onRekognitionServiceCreateStreamProcessor();
        else otherwise(Value);
    }
}
