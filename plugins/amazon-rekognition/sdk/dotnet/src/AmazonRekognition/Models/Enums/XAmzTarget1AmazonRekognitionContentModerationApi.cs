using System;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Enum;

namespace AmazonRekognition.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget1AmazonRekognitionContentModerationApi>))]
public sealed record XAmzTarget1AmazonRekognitionContentModerationApi : OpenStringEnum<XAmzTarget1AmazonRekognitionContentModerationApi>
{
    private XAmzTarget1AmazonRekognitionContentModerationApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget1AmazonRekognitionContentModerationApi RekognitionServiceStartContentModeration = new(
        "RekognitionService.StartContentModeration");

    public TResult Match<TResult>(Func<TResult> onRekognitionServiceStartContentModeration,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == RekognitionServiceStartContentModeration => onRekognitionServiceStartContentModeration(),
            _ => otherwise(Value)
        };

    public void Match(Action onRekognitionServiceStartContentModeration, Action<string> otherwise)
    {
        if (this == RekognitionServiceStartContentModeration) onRekognitionServiceStartContentModeration();
        else otherwise(Value);
    }
}
