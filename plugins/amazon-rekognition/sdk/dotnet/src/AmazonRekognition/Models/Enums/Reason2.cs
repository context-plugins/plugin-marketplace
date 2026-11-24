using System;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Enum;

namespace AmazonRekognition.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Reason2>))]
public sealed record Reason2 : OpenStringEnum<Reason2>
{
    private Reason2(string value) : base(value)
    {
    }

    public static readonly Reason2 FaceNotFound = new("FACE_NOT_FOUND");

    public static readonly Reason2 AssociatedToADifferentUser = new("ASSOCIATED_TO_A_DIFFERENT_USER");

    public TResult Match<TResult>(Func<TResult> onFaceNotFound,
        Func<TResult> onAssociatedToADifferentUser,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == FaceNotFound => onFaceNotFound(),
            _ when this == AssociatedToADifferentUser => onAssociatedToADifferentUser(),
            _ => otherwise(Value)
        };

    public void Match(Action onFaceNotFound, Action onAssociatedToADifferentUser, Action<string> otherwise)
    {
        if (this == FaceNotFound) onFaceNotFound();
        else if (this == AssociatedToADifferentUser) onAssociatedToADifferentUser();
        else otherwise(Value);
    }
}
