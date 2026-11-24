using System;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Enum;

namespace AmazonRekognition.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget19>))]
public sealed record XAmzTarget19 : OpenStringEnum<XAmzTarget19>
{
    private XAmzTarget19(string value) : base(value)
    {
    }

    public static readonly XAmzTarget19 RekognitionServiceStartSegmentDetection = new(
        "RekognitionService.StartSegmentDetection");

    public TResult Match<TResult>(Func<TResult> onRekognitionServiceStartSegmentDetection,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == RekognitionServiceStartSegmentDetection => onRekognitionServiceStartSegmentDetection(),
            _ => otherwise(Value)
        };

    public void Match(Action onRekognitionServiceStartSegmentDetection, Action<string> otherwise)
    {
        if (this == RekognitionServiceStartSegmentDetection) onRekognitionServiceStartSegmentDetection();
        else otherwise(Value);
    }
}
