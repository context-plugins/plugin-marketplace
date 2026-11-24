using System;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Enum;

namespace AmazonRekognition.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget1AmazonRekognitionProjectVersionApi>))]
public sealed record XAmzTarget1AmazonRekognitionProjectVersionApi : OpenStringEnum<XAmzTarget1AmazonRekognitionProjectVersionApi>
{
    private XAmzTarget1AmazonRekognitionProjectVersionApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget1AmazonRekognitionProjectVersionApi RekognitionServiceDeleteProjectVersion = new(
        "RekognitionService.DeleteProjectVersion");

    public TResult Match<TResult>(Func<TResult> onRekognitionServiceDeleteProjectVersion,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == RekognitionServiceDeleteProjectVersion => onRekognitionServiceDeleteProjectVersion(),
            _ => otherwise(Value)
        };

    public void Match(Action onRekognitionServiceDeleteProjectVersion, Action<string> otherwise)
    {
        if (this == RekognitionServiceDeleteProjectVersion) onRekognitionServiceDeleteProjectVersion();
        else otherwise(Value);
    }
}
