using System;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Enum;

namespace AmazonRekognition.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget3AmazonRekognitionProjectVersionApi>))]
public sealed record XAmzTarget3AmazonRekognitionProjectVersionApi : OpenStringEnum<XAmzTarget3AmazonRekognitionProjectVersionApi>
{
    private XAmzTarget3AmazonRekognitionProjectVersionApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget3AmazonRekognitionProjectVersionApi RekognitionServiceStartProjectVersion = new(
        "RekognitionService.StartProjectVersion");

    public TResult Match<TResult>(Func<TResult> onRekognitionServiceStartProjectVersion,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == RekognitionServiceStartProjectVersion => onRekognitionServiceStartProjectVersion(),
            _ => otherwise(Value)
        };

    public void Match(Action onRekognitionServiceStartProjectVersion, Action<string> otherwise)
    {
        if (this == RekognitionServiceStartProjectVersion) onRekognitionServiceStartProjectVersion();
        else otherwise(Value);
    }
}
