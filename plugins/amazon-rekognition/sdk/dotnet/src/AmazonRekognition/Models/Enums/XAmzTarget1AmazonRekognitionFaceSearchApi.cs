using System;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Enum;

namespace AmazonRekognition.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget1AmazonRekognitionFaceSearchApi>))]
public sealed record XAmzTarget1AmazonRekognitionFaceSearchApi : OpenStringEnum<XAmzTarget1AmazonRekognitionFaceSearchApi>
{
    private XAmzTarget1AmazonRekognitionFaceSearchApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget1AmazonRekognitionFaceSearchApi RekognitionServiceStartFaceSearch = new(
        "RekognitionService.StartFaceSearch");

    public TResult Match<TResult>(Func<TResult> onRekognitionServiceStartFaceSearch, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == RekognitionServiceStartFaceSearch => onRekognitionServiceStartFaceSearch(),
            _ => otherwise(Value)
        };

    public void Match(Action onRekognitionServiceStartFaceSearch, Action<string> otherwise)
    {
        if (this == RekognitionServiceStartFaceSearch) onRekognitionServiceStartFaceSearch();
        else otherwise(Value);
    }
}
