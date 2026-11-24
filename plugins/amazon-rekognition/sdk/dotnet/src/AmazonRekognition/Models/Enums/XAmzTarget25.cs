using System;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Enum;

namespace AmazonRekognition.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget25>))]
public sealed record XAmzTarget25 : OpenStringEnum<XAmzTarget25>
{
    private XAmzTarget25(string value) : base(value)
    {
    }

    public static readonly XAmzTarget25 RekognitionServiceUntagResource = new("RekognitionService.UntagResource");

    public TResult Match<TResult>(Func<TResult> onRekognitionServiceUntagResource, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == RekognitionServiceUntagResource => onRekognitionServiceUntagResource(),
            _ => otherwise(Value)
        };

    public void Match(Action onRekognitionServiceUntagResource, Action<string> otherwise)
    {
        if (this == RekognitionServiceUntagResource) onRekognitionServiceUntagResource();
        else otherwise(Value);
    }
}
