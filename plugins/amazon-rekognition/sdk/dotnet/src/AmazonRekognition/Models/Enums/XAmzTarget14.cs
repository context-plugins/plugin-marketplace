using System;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Enum;

namespace AmazonRekognition.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget14>))]
public sealed record XAmzTarget14 : OpenStringEnum<XAmzTarget14>
{
    private XAmzTarget14(string value) : base(value)
    {
    }

    public static readonly XAmzTarget14 RekognitionServiceGetFaceDetection = new("RekognitionService.GetFaceDetection");

    public TResult Match<TResult>(Func<TResult> onRekognitionServiceGetFaceDetection,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == RekognitionServiceGetFaceDetection => onRekognitionServiceGetFaceDetection(),
            _ => otherwise(Value)
        };

    public void Match(Action onRekognitionServiceGetFaceDetection, Action<string> otherwise)
    {
        if (this == RekognitionServiceGetFaceDetection) onRekognitionServiceGetFaceDetection();
        else otherwise(Value);
    }
}
