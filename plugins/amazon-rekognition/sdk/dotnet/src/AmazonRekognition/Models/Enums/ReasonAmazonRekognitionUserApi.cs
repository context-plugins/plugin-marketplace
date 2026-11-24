using System;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Enum;

namespace AmazonRekognition.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<ReasonAmazonRekognitionUserApi>))]
public sealed record ReasonAmazonRekognitionUserApi : OpenStringEnum<ReasonAmazonRekognitionUserApi>
{
    private ReasonAmazonRekognitionUserApi(string value) : base(value)
    {
    }

    public static readonly ReasonAmazonRekognitionUserApi FaceNotLargest = new("FACE_NOT_LARGEST");

    public static readonly ReasonAmazonRekognitionUserApi ExceedsMaxFaces = new("EXCEEDS_MAX_FACES");

    public static readonly ReasonAmazonRekognitionUserApi ExtremePose = new("EXTREME_POSE");

    public static readonly ReasonAmazonRekognitionUserApi LowBrightness = new("LOW_BRIGHTNESS");

    public static readonly ReasonAmazonRekognitionUserApi LowSharpness = new("LOW_SHARPNESS");

    public static readonly ReasonAmazonRekognitionUserApi LowConfidence = new("LOW_CONFIDENCE");

    public static readonly ReasonAmazonRekognitionUserApi SmallBoundingBox = new("SMALL_BOUNDING_BOX");

    public static readonly ReasonAmazonRekognitionUserApi LowFaceQuality = new("LOW_FACE_QUALITY");

    public TResult Match<TResult>(Func<TResult> onFaceNotLargest,
        Func<TResult> onExceedsMaxFaces,
        Func<TResult> onExtremePose,
        Func<TResult> onLowBrightness,
        Func<TResult> onLowSharpness,
        Func<TResult> onLowConfidence,
        Func<TResult> onSmallBoundingBox,
        Func<TResult> onLowFaceQuality,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == FaceNotLargest => onFaceNotLargest(),
            _ when this == ExceedsMaxFaces => onExceedsMaxFaces(),
            _ when this == ExtremePose => onExtremePose(),
            _ when this == LowBrightness => onLowBrightness(),
            _ when this == LowSharpness => onLowSharpness(),
            _ when this == LowConfidence => onLowConfidence(),
            _ when this == SmallBoundingBox => onSmallBoundingBox(),
            _ when this == LowFaceQuality => onLowFaceQuality(),
            _ => otherwise(Value)
        };

    public void Match(Action onFaceNotLargest,
        Action onExceedsMaxFaces,
        Action onExtremePose,
        Action onLowBrightness,
        Action onLowSharpness,
        Action onLowConfidence,
        Action onSmallBoundingBox,
        Action onLowFaceQuality,
        Action<string> otherwise)
    {
        if (this == FaceNotLargest) onFaceNotLargest();
        else if (this == ExceedsMaxFaces) onExceedsMaxFaces();
        else if (this == ExtremePose) onExtremePose();
        else if (this == LowBrightness) onLowBrightness();
        else if (this == LowSharpness) onLowSharpness();
        else if (this == LowConfidence) onLowConfidence();
        else if (this == SmallBoundingBox) onSmallBoundingBox();
        else if (this == LowFaceQuality) onLowFaceQuality();
        else otherwise(Value);
    }
}
