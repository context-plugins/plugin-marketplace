using System;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Enum;

namespace AmazonRekognition.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget18>))]
public sealed record XAmzTarget18 : OpenStringEnum<XAmzTarget18>
{
    private XAmzTarget18(string value) : base(value)
    {
    }

    public static readonly XAmzTarget18 RekognitionServiceGetSegmentDetection = new(
        "RekognitionService.GetSegmentDetection");

    public TResult Match<TResult>(Func<TResult> onRekognitionServiceGetSegmentDetection,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == RekognitionServiceGetSegmentDetection => onRekognitionServiceGetSegmentDetection(),
            _ => otherwise(Value)
        };

    public void Match(Action onRekognitionServiceGetSegmentDetection, Action<string> otherwise)
    {
        if (this == RekognitionServiceGetSegmentDetection) onRekognitionServiceGetSegmentDetection();
        else otherwise(Value);
    }
}
