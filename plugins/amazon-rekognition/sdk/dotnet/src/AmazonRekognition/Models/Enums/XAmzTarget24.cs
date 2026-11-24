using System;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Enum;

namespace AmazonRekognition.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget24>))]
public sealed record XAmzTarget24 : OpenStringEnum<XAmzTarget24>
{
    private XAmzTarget24(string value) : base(value)
    {
    }

    public static readonly XAmzTarget24 RekognitionServiceTagResource = new("RekognitionService.TagResource");

    public TResult Match<TResult>(Func<TResult> onRekognitionServiceTagResource, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == RekognitionServiceTagResource => onRekognitionServiceTagResource(),
            _ => otherwise(Value)
        };

    public void Match(Action onRekognitionServiceTagResource, Action<string> otherwise)
    {
        if (this == RekognitionServiceTagResource) onRekognitionServiceTagResource();
        else otherwise(Value);
    }
}
