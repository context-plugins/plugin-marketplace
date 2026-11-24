using System;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Enum;

namespace AmazonRekognition.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<ReasonAmazonRekognitionFaceCollectionsApi>))]
public sealed record ReasonAmazonRekognitionFaceCollectionsApi : OpenStringEnum<ReasonAmazonRekognitionFaceCollectionsApi>
{
    private ReasonAmazonRekognitionFaceCollectionsApi(string value) : base(value)
    {
    }

    public static readonly ReasonAmazonRekognitionFaceCollectionsApi ExceedsMaxFaces = new("EXCEEDS_MAX_FACES");

    public static readonly ReasonAmazonRekognitionFaceCollectionsApi ExtremePose = new("EXTREME_POSE");

    public static readonly ReasonAmazonRekognitionFaceCollectionsApi LowBrightness = new("LOW_BRIGHTNESS");

    public static readonly ReasonAmazonRekognitionFaceCollectionsApi LowSharpness = new("LOW_SHARPNESS");

    public static readonly ReasonAmazonRekognitionFaceCollectionsApi LowConfidence = new("LOW_CONFIDENCE");

    public static readonly ReasonAmazonRekognitionFaceCollectionsApi SmallBoundingBox = new("SMALL_BOUNDING_BOX");

    public static readonly ReasonAmazonRekognitionFaceCollectionsApi LowFaceQuality = new("LOW_FACE_QUALITY");

    public TResult Match<TResult>(Func<TResult> onExceedsMaxFaces,
        Func<TResult> onExtremePose,
        Func<TResult> onLowBrightness,
        Func<TResult> onLowSharpness,
        Func<TResult> onLowConfidence,
        Func<TResult> onSmallBoundingBox,
        Func<TResult> onLowFaceQuality,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == ExceedsMaxFaces => onExceedsMaxFaces(),
            _ when this == ExtremePose => onExtremePose(),
            _ when this == LowBrightness => onLowBrightness(),
            _ when this == LowSharpness => onLowSharpness(),
            _ when this == LowConfidence => onLowConfidence(),
            _ when this == SmallBoundingBox => onSmallBoundingBox(),
            _ when this == LowFaceQuality => onLowFaceQuality(),
            _ => otherwise(Value)
        };

    public void Match(Action onExceedsMaxFaces,
        Action onExtremePose,
        Action onLowBrightness,
        Action onLowSharpness,
        Action onLowConfidence,
        Action onSmallBoundingBox,
        Action onLowFaceQuality,
        Action<string> otherwise)
    {
        if (this == ExceedsMaxFaces) onExceedsMaxFaces();
        else if (this == ExtremePose) onExtremePose();
        else if (this == LowBrightness) onLowBrightness();
        else if (this == LowSharpness) onLowSharpness();
        else if (this == LowConfidence) onLowConfidence();
        else if (this == SmallBoundingBox) onSmallBoundingBox();
        else if (this == LowFaceQuality) onLowFaceQuality();
        else otherwise(Value);
    }
}
