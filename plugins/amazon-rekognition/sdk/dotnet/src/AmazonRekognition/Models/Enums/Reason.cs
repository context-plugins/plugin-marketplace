using System;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Enum;

namespace AmazonRekognition.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Reason>))]
public sealed record Reason : OpenStringEnum<Reason>
{
    private Reason(string value) : base(value)
    {
    }

    public static readonly Reason FaceNotFound = new("FACE_NOT_FOUND");

    public static readonly Reason AssociatedToADifferentUser = new("ASSOCIATED_TO_A_DIFFERENT_USER");

    public static readonly Reason LowMatchConfidence = new("LOW_MATCH_CONFIDENCE");

    public TResult Match<TResult>(Func<TResult> onFaceNotFound,
        Func<TResult> onAssociatedToADifferentUser,
        Func<TResult> onLowMatchConfidence,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == FaceNotFound => onFaceNotFound(),
            _ when this == AssociatedToADifferentUser => onAssociatedToADifferentUser(),
            _ when this == LowMatchConfidence => onLowMatchConfidence(),
            _ => otherwise(Value)
        };

    public void Match(Action onFaceNotFound,
        Action onAssociatedToADifferentUser,
        Action onLowMatchConfidence,
        Action<string> otherwise)
    {
        if (this == FaceNotFound) onFaceNotFound();
        else if (this == AssociatedToADifferentUser) onAssociatedToADifferentUser();
        else if (this == LowMatchConfidence) onLowMatchConfidence();
        else otherwise(Value);
    }
}
