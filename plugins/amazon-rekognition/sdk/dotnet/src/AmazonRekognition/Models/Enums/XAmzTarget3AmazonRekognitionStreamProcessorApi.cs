using System;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Enum;

namespace AmazonRekognition.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget3AmazonRekognitionStreamProcessorApi>))]
public sealed record XAmzTarget3AmazonRekognitionStreamProcessorApi : OpenStringEnum<XAmzTarget3AmazonRekognitionStreamProcessorApi>
{
    private XAmzTarget3AmazonRekognitionStreamProcessorApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget3AmazonRekognitionStreamProcessorApi RekognitionServiceListStreamProcessors = new(
        "RekognitionService.ListStreamProcessors");

    public TResult Match<TResult>(Func<TResult> onRekognitionServiceListStreamProcessors,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == RekognitionServiceListStreamProcessors => onRekognitionServiceListStreamProcessors(),
            _ => otherwise(Value)
        };

    public void Match(Action onRekognitionServiceListStreamProcessors, Action<string> otherwise)
    {
        if (this == RekognitionServiceListStreamProcessors) onRekognitionServiceListStreamProcessors();
        else otherwise(Value);
    }
}
