using System;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Enum;

namespace AmazonRekognition.Models.Enums;

/// <summary>
/// The type of the challenge being used for the Face Liveness session.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<TypeAmazonRekognitionFaceLivenessApi>))]
public sealed record TypeAmazonRekognitionFaceLivenessApi : OpenStringEnum<TypeAmazonRekognitionFaceLivenessApi>
{
    private TypeAmazonRekognitionFaceLivenessApi(string value) : base(value)
    {
    }

    public static readonly TypeAmazonRekognitionFaceLivenessApi FaceMovementAndLightChallenge = new(
        "FaceMovementAndLightChallenge");

    public static readonly TypeAmazonRekognitionFaceLivenessApi FaceMovementChallenge = new("FaceMovementChallenge");

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
