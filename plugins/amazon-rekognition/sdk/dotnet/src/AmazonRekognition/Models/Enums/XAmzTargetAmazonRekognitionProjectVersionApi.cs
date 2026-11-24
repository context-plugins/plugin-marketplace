using System;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Enum;

namespace AmazonRekognition.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTargetAmazonRekognitionProjectVersionApi>))]
public sealed record XAmzTargetAmazonRekognitionProjectVersionApi : OpenStringEnum<XAmzTargetAmazonRekognitionProjectVersionApi>
{
    private XAmzTargetAmazonRekognitionProjectVersionApi(string value) : base(value)
    {
    }

    public static readonly XAmzTargetAmazonRekognitionProjectVersionApi RekognitionServiceCreateProjectVersion = new(
        "RekognitionService.CreateProjectVersion");

    public TResult Match<TResult>(Func<TResult> onRekognitionServiceCreateProjectVersion,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == RekognitionServiceCreateProjectVersion => onRekognitionServiceCreateProjectVersion(),
            _ => otherwise(Value)
        };

    public void Match(Action onRekognitionServiceCreateProjectVersion, Action<string> otherwise)
    {
        if (this == RekognitionServiceCreateProjectVersion) onRekognitionServiceCreateProjectVersion();
        else otherwise(Value);
    }
}
