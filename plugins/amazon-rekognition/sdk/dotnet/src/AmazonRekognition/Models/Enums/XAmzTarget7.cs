using System;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Enum;

namespace AmazonRekognition.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget7>))]
public sealed record XAmzTarget7 : OpenStringEnum<XAmzTarget7>
{
    private XAmzTarget7(string value) : base(value)
    {
    }

    public static readonly XAmzTarget7 RekognitionServiceDetectText = new("RekognitionService.DetectText");

    public TResult Match<TResult>(Func<TResult> onRekognitionServiceDetectText, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == RekognitionServiceDetectText => onRekognitionServiceDetectText(),
            _ => otherwise(Value)
        };

    public void Match(Action onRekognitionServiceDetectText, Action<string> otherwise)
    {
        if (this == RekognitionServiceDetectText) onRekognitionServiceDetectText();
        else otherwise(Value);
    }
}
