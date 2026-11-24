using System;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Enum;

namespace AmazonRekognition.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget15>))]
public sealed record XAmzTarget15 : OpenStringEnum<XAmzTarget15>
{
    private XAmzTarget15(string value) : base(value)
    {
    }

    public static readonly XAmzTarget15 RekognitionServiceStartFaceDetection = new(
        "RekognitionService.StartFaceDetection");

    public TResult Match<TResult>(Func<TResult> onRekognitionServiceStartFaceDetection,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == RekognitionServiceStartFaceDetection => onRekognitionServiceStartFaceDetection(),
            _ => otherwise(Value)
        };

    public void Match(Action onRekognitionServiceStartFaceDetection, Action<string> otherwise)
    {
        if (this == RekognitionServiceStartFaceDetection) onRekognitionServiceStartFaceDetection();
        else otherwise(Value);
    }
}
