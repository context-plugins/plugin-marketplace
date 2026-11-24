using System;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Enum;

namespace AmazonRekognition.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget4AmazonRekognitionStreamProcessorApi>))]
public sealed record XAmzTarget4AmazonRekognitionStreamProcessorApi : OpenStringEnum<XAmzTarget4AmazonRekognitionStreamProcessorApi>
{
    private XAmzTarget4AmazonRekognitionStreamProcessorApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget4AmazonRekognitionStreamProcessorApi RekognitionServiceStartStreamProcessor = new(
        "RekognitionService.StartStreamProcessor");

    public TResult Match<TResult>(Func<TResult> onRekognitionServiceStartStreamProcessor,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == RekognitionServiceStartStreamProcessor => onRekognitionServiceStartStreamProcessor(),
            _ => otherwise(Value)
        };

    public void Match(Action onRekognitionServiceStartStreamProcessor, Action<string> otherwise)
    {
        if (this == RekognitionServiceStartStreamProcessor) onRekognitionServiceStartStreamProcessor();
        else otherwise(Value);
    }
}
