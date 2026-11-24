using System;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Enum;

namespace AmazonRekognition.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget>))]
public sealed record XAmzTarget : OpenStringEnum<XAmzTarget>
{
    private XAmzTarget(string value) : base(value)
    {
    }

    public static readonly XAmzTarget RekognitionServiceGetCelebrityRecognition = new(
        "RekognitionService.GetCelebrityRecognition");

    public TResult Match<TResult>(Func<TResult> onRekognitionServiceGetCelebrityRecognition,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == RekognitionServiceGetCelebrityRecognition => onRekognitionServiceGetCelebrityRecognition(),
            _ => otherwise(Value)
        };

    public void Match(Action onRekognitionServiceGetCelebrityRecognition, Action<string> otherwise)
    {
        if (this == RekognitionServiceGetCelebrityRecognition) onRekognitionServiceGetCelebrityRecognition();
        else otherwise(Value);
    }
}
