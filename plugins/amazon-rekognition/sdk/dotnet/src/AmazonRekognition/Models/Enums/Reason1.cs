using System;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Enum;

namespace AmazonRekognition.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Reason1>))]
public sealed record Reason1 : OpenStringEnum<Reason1>
{
    private Reason1(string value) : base(value)
    {
    }

    public static readonly Reason1 AssociatedToAnExistingUser = new("ASSOCIATED_TO_AN_EXISTING_USER");

    public static readonly Reason1 FaceNotFound = new("FACE_NOT_FOUND");

    public TResult Match<TResult>(Func<TResult> onAssociatedToAnExistingUser,
        Func<TResult> onFaceNotFound,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AssociatedToAnExistingUser => onAssociatedToAnExistingUser(),
            _ when this == FaceNotFound => onFaceNotFound(),
            _ => otherwise(Value)
        };

    public void Match(Action onAssociatedToAnExistingUser, Action onFaceNotFound, Action<string> otherwise)
    {
        if (this == AssociatedToAnExistingUser) onAssociatedToAnExistingUser();
        else if (this == FaceNotFound) onFaceNotFound();
        else otherwise(Value);
    }
}
