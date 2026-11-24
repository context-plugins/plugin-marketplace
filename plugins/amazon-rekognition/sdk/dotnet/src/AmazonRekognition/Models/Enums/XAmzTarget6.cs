using System;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Enum;

namespace AmazonRekognition.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget6>))]
public sealed record XAmzTarget6 : OpenStringEnum<XAmzTarget6>
{
    private XAmzTarget6(string value) : base(value)
    {
    }

    public static readonly XAmzTarget6 RekognitionServiceDetectProtectiveEquipment = new(
        "RekognitionService.DetectProtectiveEquipment");

    public TResult Match<TResult>(Func<TResult> onRekognitionServiceDetectProtectiveEquipment,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this ==
                RekognitionServiceDetectProtectiveEquipment => onRekognitionServiceDetectProtectiveEquipment(),
            _ => otherwise(Value)
        };

    public void Match(Action onRekognitionServiceDetectProtectiveEquipment, Action<string> otherwise)
    {
        if (this == RekognitionServiceDetectProtectiveEquipment) onRekognitionServiceDetectProtectiveEquipment();
        else otherwise(Value);
    }
}
