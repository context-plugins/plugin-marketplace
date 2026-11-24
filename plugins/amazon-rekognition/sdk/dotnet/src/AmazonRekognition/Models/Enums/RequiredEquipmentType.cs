using System;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Enum;

namespace AmazonRekognition.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<RequiredEquipmentType>))]
public sealed record RequiredEquipmentType : OpenStringEnum<RequiredEquipmentType>
{
    private RequiredEquipmentType(string value) : base(value)
    {
    }

    public static readonly RequiredEquipmentType FaceCover = new("FACE_COVER");

    public static readonly RequiredEquipmentType HandCover = new("HAND_COVER");

    public static readonly RequiredEquipmentType HeadCover = new("HEAD_COVER");

    public TResult Match<TResult>(Func<TResult> onFaceCover,
        Func<TResult> onHandCover,
        Func<TResult> onHeadCover,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == FaceCover => onFaceCover(),
            _ when this == HandCover => onHandCover(),
            _ when this == HeadCover => onHeadCover(),
            _ => otherwise(Value)
        };

    public void Match(Action onFaceCover, Action onHandCover, Action onHeadCover, Action<string> otherwise)
    {
        if (this == FaceCover) onFaceCover();
        else if (this == HandCover) onHandCover();
        else if (this == HeadCover) onHeadCover();
        else otherwise(Value);
    }
}
