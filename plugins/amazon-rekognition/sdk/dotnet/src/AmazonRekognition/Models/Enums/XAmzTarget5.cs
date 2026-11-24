using System;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Enum;

namespace AmazonRekognition.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget5>))]
public sealed record XAmzTarget5 : OpenStringEnum<XAmzTarget5>
{
    private XAmzTarget5(string value) : base(value)
    {
    }

    public static readonly XAmzTarget5 RekognitionServiceSearchFacesByImage = new(
        "RekognitionService.SearchFacesByImage");

    public TResult Match<TResult>(Func<TResult> onRekognitionServiceSearchFacesByImage,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == RekognitionServiceSearchFacesByImage => onRekognitionServiceSearchFacesByImage(),
            _ => otherwise(Value)
        };

    public void Match(Action onRekognitionServiceSearchFacesByImage, Action<string> otherwise)
    {
        if (this == RekognitionServiceSearchFacesByImage) onRekognitionServiceSearchFacesByImage();
        else otherwise(Value);
    }
}
