using System;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Enum;

namespace AmazonRekognition.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget2AmazonRekognitionFaceCollectionsApi>))]
public sealed record XAmzTarget2AmazonRekognitionFaceCollectionsApi : OpenStringEnum<XAmzTarget2AmazonRekognitionFaceCollectionsApi>
{
    private XAmzTarget2AmazonRekognitionFaceCollectionsApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget2AmazonRekognitionFaceCollectionsApi RekognitionServiceListCollections = new(
        "RekognitionService.ListCollections");

    public TResult Match<TResult>(Func<TResult> onRekognitionServiceListCollections, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == RekognitionServiceListCollections => onRekognitionServiceListCollections(),
            _ => otherwise(Value)
        };

    public void Match(Action onRekognitionServiceListCollections, Action<string> otherwise)
    {
        if (this == RekognitionServiceListCollections) onRekognitionServiceListCollections();
        else otherwise(Value);
    }
}
