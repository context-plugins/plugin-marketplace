using System;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Enum;

namespace AmazonRekognition.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget1AmazonRekognitionFaceCollectionsApi>))]
public sealed record XAmzTarget1AmazonRekognitionFaceCollectionsApi : OpenStringEnum<XAmzTarget1AmazonRekognitionFaceCollectionsApi>
{
    private XAmzTarget1AmazonRekognitionFaceCollectionsApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget1AmazonRekognitionFaceCollectionsApi RekognitionServiceCreateCollection = new(
        "RekognitionService.CreateCollection");

    public TResult Match<TResult>(Func<TResult> onRekognitionServiceCreateCollection,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == RekognitionServiceCreateCollection => onRekognitionServiceCreateCollection(),
            _ => otherwise(Value)
        };

    public void Match(Action onRekognitionServiceCreateCollection, Action<string> otherwise)
    {
        if (this == RekognitionServiceCreateCollection) onRekognitionServiceCreateCollection();
        else otherwise(Value);
    }
}
