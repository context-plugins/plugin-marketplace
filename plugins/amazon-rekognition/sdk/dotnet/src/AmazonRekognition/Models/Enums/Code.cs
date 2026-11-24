using System;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Enum;

namespace AmazonRekognition.Models.Enums;

/// <summary>
/// A code identifying the condition that was detected during the Face Liveness session.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Code>))]
public sealed record Code : OpenStringEnum<Code>
{
    private Code(string value) : base(value)
    {
    }

    public static readonly Code FaceNotVisible = new("FACE_NOT_VISIBLE");

    public static readonly Code FaceObstructionDetected = new("FACE_OBSTRUCTION_DETECTED");

    public static readonly Code LowVideoQualityDetected = new("LOW_VIDEO_QUALITY_DETECTED");

    public static readonly Code FaceNotAligned = new("FACE_NOT_ALIGNED");

    public static readonly Code EyesClosedDetected = new("EYES_CLOSED_DETECTED");

    public static readonly Code LowLightingDetected = new("LOW_LIGHTING_DETECTED");

    public static readonly Code HighLightingDetected = new("HIGH_LIGHTING_DETECTED");

    public TResult Match<TResult>(Func<TResult> onFaceNotVisible,
        Func<TResult> onFaceObstructionDetected,
        Func<TResult> onLowVideoQualityDetected,
        Func<TResult> onFaceNotAligned,
        Func<TResult> onEyesClosedDetected,
        Func<TResult> onLowLightingDetected,
        Func<TResult> onHighLightingDetected,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == FaceNotVisible => onFaceNotVisible(),
            _ when this == FaceObstructionDetected => onFaceObstructionDetected(),
            _ when this == LowVideoQualityDetected => onLowVideoQualityDetected(),
            _ when this == FaceNotAligned => onFaceNotAligned(),
            _ when this == EyesClosedDetected => onEyesClosedDetected(),
            _ when this == LowLightingDetected => onLowLightingDetected(),
            _ when this == HighLightingDetected => onHighLightingDetected(),
            _ => otherwise(Value)
        };

    public void Match(Action onFaceNotVisible,
        Action onFaceObstructionDetected,
        Action onLowVideoQualityDetected,
        Action onFaceNotAligned,
        Action onEyesClosedDetected,
        Action onLowLightingDetected,
        Action onHighLightingDetected,
        Action<string> otherwise)
    {
        if (this == FaceNotVisible) onFaceNotVisible();
        else if (this == FaceObstructionDetected) onFaceObstructionDetected();
        else if (this == LowVideoQualityDetected) onLowVideoQualityDetected();
        else if (this == FaceNotAligned) onFaceNotAligned();
        else if (this == EyesClosedDetected) onEyesClosedDetected();
        else if (this == LowLightingDetected) onLowLightingDetected();
        else if (this == HighLightingDetected) onHighLightingDetected();
        else otherwise(Value);
    }
}
