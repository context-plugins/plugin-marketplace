using System;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Enum;

namespace AmazonRekognition.Models.Enums;

/// <summary>
/// The types of challenges that have been selected for the Face Liveness session.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Type1AmazonRekognitionFaceLivenessApi>))]
public sealed record Type1AmazonRekognitionFaceLivenessApi : OpenStringEnum<Type1AmazonRekognitionFaceLivenessApi>
{
    private Type1AmazonRekognitionFaceLivenessApi(string value) : base(value)
    {
    }

    public static readonly Type1AmazonRekognitionFaceLivenessApi FaceMovementAndLightChallenge = new(
        "FaceMovementAndLightChallenge");

    public static readonly Type1AmazonRekognitionFaceLivenessApi FaceMovementChallenge = new("FaceMovementChallenge");

    public TResult Match<TResult>(Func<TResult> onFaceMovementAndLightChallenge,
        Func<TResult> onFaceMovementChallenge,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == FaceMovementAndLightChallenge => onFaceMovementAndLightChallenge(),
            _ when this == FaceMovementChallenge => onFaceMovementChallenge(),
            _ => otherwise(Value)
        };

    public void Match(Action onFaceMovementAndLightChallenge, Action onFaceMovementChallenge, Action<string> otherwise)
    {
        if (this == FaceMovementAndLightChallenge) onFaceMovementAndLightChallenge();
        else if (this == FaceMovementChallenge) onFaceMovementChallenge();
        else otherwise(Value);
    }
}
