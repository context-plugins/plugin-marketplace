using System;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Enum;

namespace AmazonRekognition.Models.Enums;

/// <summary>
/// The feature that was customized.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<FeatureAmazonRekognitionProjectVersionApi>))]
public sealed record FeatureAmazonRekognitionProjectVersionApi : OpenStringEnum<FeatureAmazonRekognitionProjectVersionApi>
{
    private FeatureAmazonRekognitionProjectVersionApi(string value) : base(value)
    {
    }

    public static readonly FeatureAmazonRekognitionProjectVersionApi ContentModeration = new("CONTENT_MODERATION");

    public static readonly FeatureAmazonRekognitionProjectVersionApi CustomLabels = new("CUSTOM_LABELS");

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
