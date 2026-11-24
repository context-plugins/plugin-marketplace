using System;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Enum;

namespace AmazonRekognition.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget16>))]
public sealed record XAmzTarget16 : OpenStringEnum<XAmzTarget16>
{
    private XAmzTarget16(string value) : base(value)
    {
    }

    public static readonly XAmzTarget16 RekognitionServiceGetPersonTracking = new(
        "RekognitionService.GetPersonTracking");

    public TResult Match<TResult>(Func<TResult> onRekognitionServiceGetPersonTracking,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == RekognitionServiceGetPersonTracking => onRekognitionServiceGetPersonTracking(),
            _ => otherwise(Value)
        };

    public void Match(Action onRekognitionServiceGetPersonTracking, Action<string> otherwise)
    {
        if (this == RekognitionServiceGetPersonTracking) onRekognitionServiceGetPersonTracking();
        else otherwise(Value);
    }
}
