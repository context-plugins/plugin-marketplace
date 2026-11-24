using System;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Enum;

namespace AmazonRekognition.Models.Enums;

/// <summary>
/// Specifies the project that is being customized.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Feature2>))]
public sealed record Feature2 : OpenStringEnum<Feature2>
{
    private Feature2(string value) : base(value)
    {
    }

    public static readonly Feature2 ContentModeration = new("CONTENT_MODERATION");

    public static readonly Feature2 CustomLabels = new("CUSTOM_LABELS");

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
