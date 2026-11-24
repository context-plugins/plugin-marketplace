using System;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Enum;

namespace AmazonRekognition.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget3AmazonRekognitionOperationsApi>))]
public sealed record XAmzTarget3AmazonRekognitionOperationsApi : OpenStringEnum<XAmzTarget3AmazonRekognitionOperationsApi>
{
    private XAmzTarget3AmazonRekognitionOperationsApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget3AmazonRekognitionOperationsApi RekognitionServiceDetectFaces = new(
        "RekognitionService.DetectFaces");

    public TResult Match<TResult>(Func<TResult> onRekognitionServiceDetectFaces, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == RekognitionServiceDetectFaces => onRekognitionServiceDetectFaces(),
            _ => otherwise(Value)
        };

    public void Match(Action onRekognitionServiceDetectFaces, Action<string> otherwise)
    {
        if (this == RekognitionServiceDetectFaces) onRekognitionServiceDetectFaces();
        else otherwise(Value);
    }
}
