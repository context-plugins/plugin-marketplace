using System;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Enum;

namespace AmazonRekognition.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget1AmazonRekognitionOperationsApi>))]
public sealed record XAmzTarget1AmazonRekognitionOperationsApi : OpenStringEnum<XAmzTarget1AmazonRekognitionOperationsApi>
{
    private XAmzTarget1AmazonRekognitionOperationsApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget1AmazonRekognitionOperationsApi RekognitionServiceCopyProjectVersion = new(
        "RekognitionService.CopyProjectVersion");

    public TResult Match<TResult>(Func<TResult> onRekognitionServiceCopyProjectVersion,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == RekognitionServiceCopyProjectVersion => onRekognitionServiceCopyProjectVersion(),
            _ => otherwise(Value)
        };

    public void Match(Action onRekognitionServiceCopyProjectVersion, Action<string> otherwise)
    {
        if (this == RekognitionServiceCopyProjectVersion) onRekognitionServiceCopyProjectVersion();
        else otherwise(Value);
    }
}
