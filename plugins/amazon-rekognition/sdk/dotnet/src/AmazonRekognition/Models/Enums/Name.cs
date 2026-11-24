using System;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Enum;

namespace AmazonRekognition.Models.Enums;

/// <summary>
/// The detected body part.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Name>))]
public sealed record Name : OpenStringEnum<Name>
{
    private Name(string value) : base(value)
    {
    }

    public static readonly Name Face = new("FACE");

    public static readonly Name Head = new("HEAD");

    public static readonly Name LeftHand = new("LEFT_HAND");

    public static readonly Name RightHand = new("RIGHT_HAND");

    public TResult Match<TResult>(Func<TResult> onFace,
        Func<TResult> onHead,
        Func<TResult> onLeftHand,
        Func<TResult> onRightHand,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Face => onFace(),
            _ when this == Head => onHead(),
            _ when this == LeftHand => onLeftHand(),
            _ when this == RightHand => onRightHand(),
            _ => otherwise(Value)
        };

    public void Match(Action onFace, Action onHead, Action onLeftHand, Action onRightHand, Action<string> otherwise)
    {
        if (this == Face) onFace();
        else if (this == Head) onHead();
        else if (this == LeftHand) onLeftHand();
        else if (this == RightHand) onRightHand();
        else otherwise(Value);
    }
}
