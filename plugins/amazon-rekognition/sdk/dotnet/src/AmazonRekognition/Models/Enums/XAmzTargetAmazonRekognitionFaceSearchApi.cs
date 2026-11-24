using System;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Enum;

namespace AmazonRekognition.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTargetAmazonRekognitionFaceSearchApi>))]
public sealed record XAmzTargetAmazonRekognitionFaceSearchApi : OpenStringEnum<XAmzTargetAmazonRekognitionFaceSearchApi>
{
    private XAmzTargetAmazonRekognitionFaceSearchApi(string value) : base(value)
    {
    }

    public static readonly XAmzTargetAmazonRekognitionFaceSearchApi RekognitionServiceGetFaceSearch = new(
        "RekognitionService.GetFaceSearch");

    public TResult Match<TResult>(Func<TResult> onRekognitionServiceGetFaceSearch, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == RekognitionServiceGetFaceSearch => onRekognitionServiceGetFaceSearch(),
            _ => otherwise(Value)
        };

    public void Match(Action onRekognitionServiceGetFaceSearch, Action<string> otherwise)
    {
        if (this == RekognitionServiceGetFaceSearch) onRekognitionServiceGetFaceSearch();
        else otherwise(Value);
    }
}
