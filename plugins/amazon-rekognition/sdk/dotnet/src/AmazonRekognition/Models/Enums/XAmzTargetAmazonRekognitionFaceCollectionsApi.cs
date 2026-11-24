using System;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Enum;

namespace AmazonRekognition.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTargetAmazonRekognitionFaceCollectionsApi>))]
public sealed record XAmzTargetAmazonRekognitionFaceCollectionsApi : OpenStringEnum<XAmzTargetAmazonRekognitionFaceCollectionsApi>
{
    private XAmzTargetAmazonRekognitionFaceCollectionsApi(string value) : base(value)
    {
    }

    public static readonly XAmzTargetAmazonRekognitionFaceCollectionsApi RekognitionServiceIndexFaces = new(
        "RekognitionService.IndexFaces");

    public TResult Match<TResult>(Func<TResult> onRekognitionServiceIndexFaces, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == RekognitionServiceIndexFaces => onRekognitionServiceIndexFaces(),
            _ => otherwise(Value)
        };

    public void Match(Action onRekognitionServiceIndexFaces, Action<string> otherwise)
    {
        if (this == RekognitionServiceIndexFaces) onRekognitionServiceIndexFaces();
        else otherwise(Value);
    }
}
