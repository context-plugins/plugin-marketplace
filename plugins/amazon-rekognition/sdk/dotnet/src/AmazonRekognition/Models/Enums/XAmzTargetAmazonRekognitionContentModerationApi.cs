using System;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Enum;

namespace AmazonRekognition.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTargetAmazonRekognitionContentModerationApi>))]
public sealed record XAmzTargetAmazonRekognitionContentModerationApi : OpenStringEnum<XAmzTargetAmazonRekognitionContentModerationApi>
{
    private XAmzTargetAmazonRekognitionContentModerationApi(string value) : base(value)
    {
    }

    public static readonly XAmzTargetAmazonRekognitionContentModerationApi RekognitionServiceGetContentModeration = new(
        "RekognitionService.GetContentModeration");

    public TResult Match<TResult>(Func<TResult> onRekognitionServiceGetContentModeration,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == RekognitionServiceGetContentModeration => onRekognitionServiceGetContentModeration(),
            _ => otherwise(Value)
        };

    public void Match(Action onRekognitionServiceGetContentModeration, Action<string> otherwise)
    {
        if (this == RekognitionServiceGetContentModeration) onRekognitionServiceGetContentModeration();
        else otherwise(Value);
    }
}
