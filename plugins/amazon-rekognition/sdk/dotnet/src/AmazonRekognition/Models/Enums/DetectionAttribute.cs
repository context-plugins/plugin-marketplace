using System;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Enum;

namespace AmazonRekognition.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<DetectionAttribute>))]
public sealed record DetectionAttribute : OpenStringEnum<DetectionAttribute>
{
    private DetectionAttribute(string value) : base(value)
    {
    }

    public static readonly DetectionAttribute Default = new("DEFAULT");

    public static readonly DetectionAttribute All = new("ALL");

    public static readonly DetectionAttribute AgeRange = new("AGE_RANGE");

    public static readonly DetectionAttribute Beard = new("BEARD");

    public static readonly DetectionAttribute Emotions = new("EMOTIONS");

    public static readonly DetectionAttribute EyeDirection = new("EYE_DIRECTION");

    public static readonly DetectionAttribute Eyeglasses = new("EYEGLASSES");

    public static readonly DetectionAttribute EyesOpen = new("EYES_OPEN");

    public static readonly DetectionAttribute Gender = new("GENDER");

    public static readonly DetectionAttribute MouthOpen = new("MOUTH_OPEN");

    public static readonly DetectionAttribute Mustache = new("MUSTACHE");

    public static readonly DetectionAttribute FaceOccluded = new("FACE_OCCLUDED");

    public static readonly DetectionAttribute Smile = new("SMILE");

    public static readonly DetectionAttribute Sunglasses = new("SUNGLASSES");

    public TResult Match<TResult>(Func<TResult> onDefault,
        Func<TResult> onAll,
        Func<TResult> onAgeRange,
        Func<TResult> onBeard,
        Func<TResult> onEmotions,
        Func<TResult> onEyeDirection,
        Func<TResult> onEyeglasses,
        Func<TResult> onEyesOpen,
        Func<TResult> onGender,
        Func<TResult> onMouthOpen,
        Func<TResult> onMustache,
        Func<TResult> onFaceOccluded,
        Func<TResult> onSmile,
        Func<TResult> onSunglasses,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Default => onDefault(),
            _ when this == All => onAll(),
            _ when this == AgeRange => onAgeRange(),
            _ when this == Beard => onBeard(),
            _ when this == Emotions => onEmotions(),
            _ when this == EyeDirection => onEyeDirection(),
            _ when this == Eyeglasses => onEyeglasses(),
            _ when this == EyesOpen => onEyesOpen(),
            _ when this == Gender => onGender(),
            _ when this == MouthOpen => onMouthOpen(),
            _ when this == Mustache => onMustache(),
            _ when this == FaceOccluded => onFaceOccluded(),
            _ when this == Smile => onSmile(),
            _ when this == Sunglasses => onSunglasses(),
            _ => otherwise(Value)
        };

    public void Match(Action onDefault,
        Action onAll,
        Action onAgeRange,
        Action onBeard,
        Action onEmotions,
        Action onEyeDirection,
        Action onEyeglasses,
        Action onEyesOpen,
        Action onGender,
        Action onMouthOpen,
        Action onMustache,
        Action onFaceOccluded,
        Action onSmile,
        Action onSunglasses,
        Action<string> otherwise)
    {
        if (this == Default) onDefault();
        else if (this == All) onAll();
        else if (this == AgeRange) onAgeRange();
        else if (this == Beard) onBeard();
        else if (this == Emotions) onEmotions();
        else if (this == EyeDirection) onEyeDirection();
        else if (this == Eyeglasses) onEyeglasses();
        else if (this == EyesOpen) onEyesOpen();
        else if (this == Gender) onGender();
        else if (this == MouthOpen) onMouthOpen();
        else if (this == Mustache) onMustache();
        else if (this == FaceOccluded) onFaceOccluded();
        else if (this == Smile) onSmile();
        else if (this == Sunglasses) onSunglasses();
        else otherwise(Value);
    }
}
