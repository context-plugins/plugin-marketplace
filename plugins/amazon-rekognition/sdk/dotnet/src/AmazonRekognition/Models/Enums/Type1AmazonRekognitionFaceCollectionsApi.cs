using System;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Enum;

namespace AmazonRekognition.Models.Enums;

/// <summary>
/// Type of landmark.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Type1AmazonRekognitionFaceCollectionsApi>))]
public sealed record Type1AmazonRekognitionFaceCollectionsApi : OpenStringEnum<Type1AmazonRekognitionFaceCollectionsApi>
{
    private Type1AmazonRekognitionFaceCollectionsApi(string value) : base(value)
    {
    }

    public static readonly Type1AmazonRekognitionFaceCollectionsApi EyeLeft = new("eyeLeft");

    public static readonly Type1AmazonRekognitionFaceCollectionsApi EyeRight = new("eyeRight");

    public static readonly Type1AmazonRekognitionFaceCollectionsApi Nose = new("nose");

    public static readonly Type1AmazonRekognitionFaceCollectionsApi MouthLeft = new("mouthLeft");

    public static readonly Type1AmazonRekognitionFaceCollectionsApi MouthRight = new("mouthRight");

    public static readonly Type1AmazonRekognitionFaceCollectionsApi LeftEyeBrowLeft = new("leftEyeBrowLeft");

    public static readonly Type1AmazonRekognitionFaceCollectionsApi LeftEyeBrowRight = new("leftEyeBrowRight");

    public static readonly Type1AmazonRekognitionFaceCollectionsApi LeftEyeBrowUp = new("leftEyeBrowUp");

    public static readonly Type1AmazonRekognitionFaceCollectionsApi RightEyeBrowLeft = new("rightEyeBrowLeft");

    public static readonly Type1AmazonRekognitionFaceCollectionsApi RightEyeBrowRight = new("rightEyeBrowRight");

    public static readonly Type1AmazonRekognitionFaceCollectionsApi RightEyeBrowUp = new("rightEyeBrowUp");

    public static readonly Type1AmazonRekognitionFaceCollectionsApi LeftEyeLeft = new("leftEyeLeft");

    public static readonly Type1AmazonRekognitionFaceCollectionsApi LeftEyeRight = new("leftEyeRight");

    public static readonly Type1AmazonRekognitionFaceCollectionsApi LeftEyeUp = new("leftEyeUp");

    public static readonly Type1AmazonRekognitionFaceCollectionsApi LeftEyeDown = new("leftEyeDown");

    public static readonly Type1AmazonRekognitionFaceCollectionsApi RightEyeLeft = new("rightEyeLeft");

    public static readonly Type1AmazonRekognitionFaceCollectionsApi RightEyeRight = new("rightEyeRight");

    public static readonly Type1AmazonRekognitionFaceCollectionsApi RightEyeUp = new("rightEyeUp");

    public static readonly Type1AmazonRekognitionFaceCollectionsApi RightEyeDown = new("rightEyeDown");

    public static readonly Type1AmazonRekognitionFaceCollectionsApi NoseLeft = new("noseLeft");

    public static readonly Type1AmazonRekognitionFaceCollectionsApi NoseRight = new("noseRight");

    public static readonly Type1AmazonRekognitionFaceCollectionsApi MouthUp = new("mouthUp");

    public static readonly Type1AmazonRekognitionFaceCollectionsApi MouthDown = new("mouthDown");

    public static readonly Type1AmazonRekognitionFaceCollectionsApi LeftPupil = new("leftPupil");

    public static readonly Type1AmazonRekognitionFaceCollectionsApi RightPupil = new("rightPupil");

    public static readonly Type1AmazonRekognitionFaceCollectionsApi UpperJawlineLeft = new("upperJawlineLeft");

    public static readonly Type1AmazonRekognitionFaceCollectionsApi MidJawlineLeft = new("midJawlineLeft");

    public static readonly Type1AmazonRekognitionFaceCollectionsApi ChinBottom = new("chinBottom");

    public static readonly Type1AmazonRekognitionFaceCollectionsApi MidJawlineRight = new("midJawlineRight");

    public static readonly Type1AmazonRekognitionFaceCollectionsApi UpperJawlineRight = new("upperJawlineRight");

    public TResult Match<TResult>(Func<TResult> onEyeLeft,
        Func<TResult> onEyeRight,
        Func<TResult> onNose,
        Func<TResult> onMouthLeft,
        Func<TResult> onMouthRight,
        Func<TResult> onLeftEyeBrowLeft,
        Func<TResult> onLeftEyeBrowRight,
        Func<TResult> onLeftEyeBrowUp,
        Func<TResult> onRightEyeBrowLeft,
        Func<TResult> onRightEyeBrowRight,
        Func<TResult> onRightEyeBrowUp,
        Func<TResult> onLeftEyeLeft,
        Func<TResult> onLeftEyeRight,
        Func<TResult> onLeftEyeUp,
        Func<TResult> onLeftEyeDown,
        Func<TResult> onRightEyeLeft,
        Func<TResult> onRightEyeRight,
        Func<TResult> onRightEyeUp,
        Func<TResult> onRightEyeDown,
        Func<TResult> onNoseLeft,
        Func<TResult> onNoseRight,
        Func<TResult> onMouthUp,
        Func<TResult> onMouthDown,
        Func<TResult> onLeftPupil,
        Func<TResult> onRightPupil,
        Func<TResult> onUpperJawlineLeft,
        Func<TResult> onMidJawlineLeft,
        Func<TResult> onChinBottom,
        Func<TResult> onMidJawlineRight,
        Func<TResult> onUpperJawlineRight,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == EyeLeft => onEyeLeft(),
            _ when this == EyeRight => onEyeRight(),
            _ when this == Nose => onNose(),
            _ when this == MouthLeft => onMouthLeft(),
            _ when this == MouthRight => onMouthRight(),
            _ when this == LeftEyeBrowLeft => onLeftEyeBrowLeft(),
            _ when this == LeftEyeBrowRight => onLeftEyeBrowRight(),
            _ when this == LeftEyeBrowUp => onLeftEyeBrowUp(),
            _ when this == RightEyeBrowLeft => onRightEyeBrowLeft(),
            _ when this == RightEyeBrowRight => onRightEyeBrowRight(),
            _ when this == RightEyeBrowUp => onRightEyeBrowUp(),
            _ when this == LeftEyeLeft => onLeftEyeLeft(),
            _ when this == LeftEyeRight => onLeftEyeRight(),
            _ when this == LeftEyeUp => onLeftEyeUp(),
            _ when this == LeftEyeDown => onLeftEyeDown(),
            _ when this == RightEyeLeft => onRightEyeLeft(),
            _ when this == RightEyeRight => onRightEyeRight(),
            _ when this == RightEyeUp => onRightEyeUp(),
            _ when this == RightEyeDown => onRightEyeDown(),
            _ when this == NoseLeft => onNoseLeft(),
            _ when this == NoseRight => onNoseRight(),
            _ when this == MouthUp => onMouthUp(),
            _ when this == MouthDown => onMouthDown(),
            _ when this == LeftPupil => onLeftPupil(),
            _ when this == RightPupil => onRightPupil(),
            _ when this == UpperJawlineLeft => onUpperJawlineLeft(),
            _ when this == MidJawlineLeft => onMidJawlineLeft(),
            _ when this == ChinBottom => onChinBottom(),
            _ when this == MidJawlineRight => onMidJawlineRight(),
            _ when this == UpperJawlineRight => onUpperJawlineRight(),
            _ => otherwise(Value)
        };

    public void Match(Action onEyeLeft,
        Action onEyeRight,
        Action onNose,
        Action onMouthLeft,
        Action onMouthRight,
        Action onLeftEyeBrowLeft,
        Action onLeftEyeBrowRight,
        Action onLeftEyeBrowUp,
        Action onRightEyeBrowLeft,
        Action onRightEyeBrowRight,
        Action onRightEyeBrowUp,
        Action onLeftEyeLeft,
        Action onLeftEyeRight,
        Action onLeftEyeUp,
        Action onLeftEyeDown,
        Action onRightEyeLeft,
        Action onRightEyeRight,
        Action onRightEyeUp,
        Action onRightEyeDown,
        Action onNoseLeft,
        Action onNoseRight,
        Action onMouthUp,
        Action onMouthDown,
        Action onLeftPupil,
        Action onRightPupil,
        Action onUpperJawlineLeft,
        Action onMidJawlineLeft,
        Action onChinBottom,
        Action onMidJawlineRight,
        Action onUpperJawlineRight,
        Action<string> otherwise)
    {
        if (this == EyeLeft) onEyeLeft();
        else if (this == EyeRight) onEyeRight();
        else if (this == Nose) onNose();
        else if (this == MouthLeft) onMouthLeft();
        else if (this == MouthRight) onMouthRight();
        else if (this == LeftEyeBrowLeft) onLeftEyeBrowLeft();
        else if (this == LeftEyeBrowRight) onLeftEyeBrowRight();
        else if (this == LeftEyeBrowUp) onLeftEyeBrowUp();
        else if (this == RightEyeBrowLeft) onRightEyeBrowLeft();
        else if (this == RightEyeBrowRight) onRightEyeBrowRight();
        else if (this == RightEyeBrowUp) onRightEyeBrowUp();
        else if (this == LeftEyeLeft) onLeftEyeLeft();
        else if (this == LeftEyeRight) onLeftEyeRight();
        else if (this == LeftEyeUp) onLeftEyeUp();
        else if (this == LeftEyeDown) onLeftEyeDown();
        else if (this == RightEyeLeft) onRightEyeLeft();
        else if (this == RightEyeRight) onRightEyeRight();
        else if (this == RightEyeUp) onRightEyeUp();
        else if (this == RightEyeDown) onRightEyeDown();
        else if (this == NoseLeft) onNoseLeft();
        else if (this == NoseRight) onNoseRight();
        else if (this == MouthUp) onMouthUp();
        else if (this == MouthDown) onMouthDown();
        else if (this == LeftPupil) onLeftPupil();
        else if (this == RightPupil) onRightPupil();
        else if (this == UpperJawlineLeft) onUpperJawlineLeft();
        else if (this == MidJawlineLeft) onMidJawlineLeft();
        else if (this == ChinBottom) onChinBottom();
        else if (this == MidJawlineRight) onMidJawlineRight();
        else if (this == UpperJawlineRight) onUpperJawlineRight();
        else otherwise(Value);
    }
}
