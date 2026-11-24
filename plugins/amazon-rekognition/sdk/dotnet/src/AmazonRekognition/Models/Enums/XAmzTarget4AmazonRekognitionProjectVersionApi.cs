using System;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Enum;

namespace AmazonRekognition.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget4AmazonRekognitionProjectVersionApi>))]
public sealed record XAmzTarget4AmazonRekognitionProjectVersionApi : OpenStringEnum<XAmzTarget4AmazonRekognitionProjectVersionApi>
{
    private XAmzTarget4AmazonRekognitionProjectVersionApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget4AmazonRekognitionProjectVersionApi RekognitionServiceStopProjectVersion = new(
        "RekognitionService.StopProjectVersion");

    public TResult Match<TResult>(Func<TResult> onRekognitionServiceStopProjectVersion,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == RekognitionServiceStopProjectVersion => onRekognitionServiceStopProjectVersion(),
            _ => otherwise(Value)
        };

    public void Match(Action onRekognitionServiceStopProjectVersion, Action<string> otherwise)
    {
        if (this == RekognitionServiceStopProjectVersion) onRekognitionServiceStopProjectVersion();
        else otherwise(Value);
    }
}
