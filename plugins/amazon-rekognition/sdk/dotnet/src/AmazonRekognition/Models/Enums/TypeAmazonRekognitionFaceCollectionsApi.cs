using System;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Enum;

namespace AmazonRekognition.Models.Enums;

/// <summary>
/// Type of emotion detected.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<TypeAmazonRekognitionFaceCollectionsApi>))]
public sealed record TypeAmazonRekognitionFaceCollectionsApi : OpenStringEnum<TypeAmazonRekognitionFaceCollectionsApi>
{
    private TypeAmazonRekognitionFaceCollectionsApi(string value) : base(value)
    {
    }

    public static readonly TypeAmazonRekognitionFaceCollectionsApi Happy = new("HAPPY");

    public static readonly TypeAmazonRekognitionFaceCollectionsApi Sad = new("SAD");

    public static readonly TypeAmazonRekognitionFaceCollectionsApi Angry = new("ANGRY");

    public static readonly TypeAmazonRekognitionFaceCollectionsApi Confused = new("CONFUSED");

    public static readonly TypeAmazonRekognitionFaceCollectionsApi Disgusted = new("DISGUSTED");

    public static readonly TypeAmazonRekognitionFaceCollectionsApi Surprised = new("SURPRISED");

    public static readonly TypeAmazonRekognitionFaceCollectionsApi Calm = new("CALM");

    public static readonly TypeAmazonRekognitionFaceCollectionsApi Unknown = new("UNKNOWN");

    public static readonly TypeAmazonRekognitionFaceCollectionsApi Fear = new("FEAR");

    public TResult Match<TResult>(Func<TResult> onHappy,
        Func<TResult> onSad,
        Func<TResult> onAngry,
        Func<TResult> onConfused,
        Func<TResult> onDisgusted,
        Func<TResult> onSurprised,
        Func<TResult> onCalm,
        Func<TResult> onUnknown,
        Func<TResult> onFear,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Happy => onHappy(),
            _ when this == Sad => onSad(),
            _ when this == Angry => onAngry(),
            _ when this == Confused => onConfused(),
            _ when this == Disgusted => onDisgusted(),
            _ when this == Surprised => onSurprised(),
            _ when this == Calm => onCalm(),
            _ when this == Unknown => onUnknown(),
            _ when this == Fear => onFear(),
            _ => otherwise(Value)
        };

    public void Match(Action onHappy,
        Action onSad,
        Action onAngry,
        Action onConfused,
        Action onDisgusted,
        Action onSurprised,
        Action onCalm,
        Action onUnknown,
        Action onFear,
        Action<string> otherwise)
    {
        if (this == Happy) onHappy();
        else if (this == Sad) onSad();
        else if (this == Angry) onAngry();
        else if (this == Confused) onConfused();
        else if (this == Disgusted) onDisgusted();
        else if (this == Surprised) onSurprised();
        else if (this == Calm) onCalm();
        else if (this == Unknown) onUnknown();
        else if (this == Fear) onFear();
        else otherwise(Value);
    }
}
