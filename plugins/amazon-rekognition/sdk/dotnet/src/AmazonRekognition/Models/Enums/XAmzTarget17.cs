using System;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Enum;

namespace AmazonRekognition.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget17>))]
public sealed record XAmzTarget17 : OpenStringEnum<XAmzTarget17>
{
    private XAmzTarget17(string value) : base(value)
    {
    }

    public static readonly XAmzTarget17 RekognitionServiceStartPersonTracking = new(
        "RekognitionService.StartPersonTracking");

    public TResult Match<TResult>(Func<TResult> onRekognitionServiceStartPersonTracking,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == RekognitionServiceStartPersonTracking => onRekognitionServiceStartPersonTracking(),
            _ => otherwise(Value)
        };

    public void Match(Action onRekognitionServiceStartPersonTracking, Action<string> otherwise)
    {
        if (this == RekognitionServiceStartPersonTracking) onRekognitionServiceStartPersonTracking();
        else otherwise(Value);
    }
}
