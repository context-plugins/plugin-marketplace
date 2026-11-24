using System;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Enum;

namespace AmazonRekognition.Models.Enums;

/// <summary>
/// Specifies feature that is being customized. If no value is provided CUSTOM_LABELS is used as a default.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<FeatureAmazonRekognitionProjectApi>))]
public sealed record FeatureAmazonRekognitionProjectApi : OpenStringEnum<FeatureAmazonRekognitionProjectApi>
{
    private FeatureAmazonRekognitionProjectApi(string value) : base(value)
    {
    }

    public static readonly FeatureAmazonRekognitionProjectApi ContentModeration = new("CONTENT_MODERATION");

    public static readonly FeatureAmazonRekognitionProjectApi CustomLabels = new("CUSTOM_LABELS");

    public TResult Match<TResult>(Func<TResult> onContentModeration,
        Func<TResult> onCustomLabels,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == ContentModeration => onContentModeration(),
            _ when this == CustomLabels => onCustomLabels(),
            _ => otherwise(Value)
        };

    public void Match(Action onContentModeration, Action onCustomLabels, Action<string> otherwise)
    {
        if (this == ContentModeration) onContentModeration();
        else if (this == CustomLabels) onCustomLabels();
        else otherwise(Value);
    }
}
