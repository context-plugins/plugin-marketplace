using System;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Enum;

namespace AmazonRekognition.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Feature1>))]
public sealed record Feature1 : OpenStringEnum<Feature1>
{
    private Feature1(string value) : base(value)
    {
    }

    public static readonly Feature1 ContentModeration = new("CONTENT_MODERATION");

    public static readonly Feature1 CustomLabels = new("CUSTOM_LABELS");

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
