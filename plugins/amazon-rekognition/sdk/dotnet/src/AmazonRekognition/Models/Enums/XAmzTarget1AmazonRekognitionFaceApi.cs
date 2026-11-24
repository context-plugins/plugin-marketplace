using System;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Enum;

namespace AmazonRekognition.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget1AmazonRekognitionFaceApi>))]
public sealed record XAmzTarget1AmazonRekognitionFaceApi : OpenStringEnum<XAmzTarget1AmazonRekognitionFaceApi>
{
    private XAmzTarget1AmazonRekognitionFaceApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget1AmazonRekognitionFaceApi RekognitionServiceDeleteFaces = new(
        "RekognitionService.DeleteFaces");

    public TResult Match<TResult>(Func<TResult> onRekognitionServiceDeleteFaces, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == RekognitionServiceDeleteFaces => onRekognitionServiceDeleteFaces(),
            _ => otherwise(Value)
        };

    public void Match(Action onRekognitionServiceDeleteFaces, Action<string> otherwise)
    {
        if (this == RekognitionServiceDeleteFaces) onRekognitionServiceDeleteFaces();
        else otherwise(Value);
    }
}
