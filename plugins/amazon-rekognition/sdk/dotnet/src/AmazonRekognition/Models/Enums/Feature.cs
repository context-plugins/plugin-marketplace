using System;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Enum;

namespace AmazonRekognition.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Feature>))]
public sealed record Feature : OpenStringEnum<Feature>
{
    private Feature(string value) : base(value)
    {
    }

    public static readonly Feature GeneralLabels = new("GENERAL_LABELS");

    public static readonly Feature ImageProperties = new("IMAGE_PROPERTIES");

    public TResult Match<TResult>(Func<TResult> onGeneralLabels,
        Func<TResult> onImageProperties,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == GeneralLabels => onGeneralLabels(),
            _ when this == ImageProperties => onImageProperties(),
            _ => otherwise(Value)
        };

    public void Match(Action onGeneralLabels, Action onImageProperties, Action<string> otherwise)
    {
        if (this == GeneralLabels) onGeneralLabels();
        else if (this == ImageProperties) onImageProperties();
        else otherwise(Value);
    }
}
