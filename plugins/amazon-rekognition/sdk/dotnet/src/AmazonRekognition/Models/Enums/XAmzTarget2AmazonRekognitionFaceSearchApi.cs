using System;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Enum;

namespace AmazonRekognition.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget2AmazonRekognitionFaceSearchApi>))]
public sealed record XAmzTarget2AmazonRekognitionFaceSearchApi : OpenStringEnum<XAmzTarget2AmazonRekognitionFaceSearchApi>
{
    private XAmzTarget2AmazonRekognitionFaceSearchApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget2AmazonRekognitionFaceSearchApi RekognitionServiceSearchFacesByImage = new(
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
