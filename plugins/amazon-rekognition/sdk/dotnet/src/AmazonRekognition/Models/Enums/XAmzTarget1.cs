using System;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Enum;

namespace AmazonRekognition.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget1>))]
public sealed record XAmzTarget1 : OpenStringEnum<XAmzTarget1>
{
    private XAmzTarget1(string value) : base(value)
    {
    }

    public static readonly XAmzTarget1 RekognitionServiceStartCelebrityRecognition = new(
        "RekognitionService.StartCelebrityRecognition");

    public TResult Match<TResult>(Func<TResult> onRekognitionServiceStartCelebrityRecognition,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this ==
                RekognitionServiceStartCelebrityRecognition => onRekognitionServiceStartCelebrityRecognition(),
            _ => otherwise(Value)
        };

    public void Match(Action onRekognitionServiceStartCelebrityRecognition, Action<string> otherwise)
    {
        if (this == RekognitionServiceStartCelebrityRecognition) onRekognitionServiceStartCelebrityRecognition();
        else otherwise(Value);
    }
}
