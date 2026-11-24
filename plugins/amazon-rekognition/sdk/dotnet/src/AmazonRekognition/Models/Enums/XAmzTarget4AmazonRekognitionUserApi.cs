using System;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Enum;

namespace AmazonRekognition.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget4AmazonRekognitionUserApi>))]
public sealed record XAmzTarget4AmazonRekognitionUserApi : OpenStringEnum<XAmzTarget4AmazonRekognitionUserApi>
{
    private XAmzTarget4AmazonRekognitionUserApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget4AmazonRekognitionUserApi RekognitionServiceSearchUsersByImage = new(
        "RekognitionService.SearchUsersByImage");

    public TResult Match<TResult>(Func<TResult> onRekognitionServiceSearchUsersByImage,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == RekognitionServiceSearchUsersByImage => onRekognitionServiceSearchUsersByImage(),
            _ => otherwise(Value)
        };

    public void Match(Action onRekognitionServiceSearchUsersByImage, Action<string> otherwise)
    {
        if (this == RekognitionServiceSearchUsersByImage) onRekognitionServiceSearchUsersByImage();
        else otherwise(Value);
    }
}
