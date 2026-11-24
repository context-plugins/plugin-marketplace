using System;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Enum;

namespace AmazonRekognition.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget2>))]
public sealed record XAmzTarget2 : OpenStringEnum<XAmzTarget2>
{
    private XAmzTarget2(string value) : base(value)
    {
    }

    public static readonly XAmzTarget2 RekognitionServiceRecognizeCelebrities = new(
        "RekognitionService.RecognizeCelebrities");

    public TResult Match<TResult>(Func<TResult> onRekognitionServiceRecognizeCelebrities,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == RekognitionServiceRecognizeCelebrities => onRekognitionServiceRecognizeCelebrities(),
            _ => otherwise(Value)
        };

    public void Match(Action onRekognitionServiceRecognizeCelebrities, Action<string> otherwise)
    {
        if (this == RekognitionServiceRecognizeCelebrities) onRekognitionServiceRecognizeCelebrities();
        else otherwise(Value);
    }
}
