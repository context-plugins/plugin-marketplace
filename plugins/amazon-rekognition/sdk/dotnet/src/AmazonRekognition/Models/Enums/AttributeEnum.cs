using System;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Enum;

namespace AmazonRekognition.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<AttributeEnum>))]
public sealed record AttributeEnum : OpenStringEnum<AttributeEnum>
{
    private AttributeEnum(string value) : base(value)
    {
    }

    public static readonly AttributeEnum Default = new("DEFAULT");

    public static readonly AttributeEnum All = new("ALL");

    public static readonly AttributeEnum AgeRange = new("AGE_RANGE");

    public static readonly AttributeEnum Beard = new("BEARD");

    public static readonly AttributeEnum Emotions = new("EMOTIONS");

    public static readonly AttributeEnum EyeDirection = new("EYE_DIRECTION");

    public static readonly AttributeEnum Eyeglasses = new("EYEGLASSES");

    public static readonly AttributeEnum EyesOpen = new("EYES_OPEN");

    public static readonly AttributeEnum Gender = new("GENDER");

    public static readonly AttributeEnum MouthOpen = new("MOUTH_OPEN");

    public static readonly AttributeEnum Mustache = new("MUSTACHE");

    public static readonly AttributeEnum FaceOccluded = new("FACE_OCCLUDED");

    public static readonly AttributeEnum Smile = new("SMILE");

    public static readonly AttributeEnum Sunglasses = new("SUNGLASSES");

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
