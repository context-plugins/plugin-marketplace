using System;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Enum;

namespace AmazonRekognition.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget23>))]
public sealed record XAmzTarget23 : OpenStringEnum<XAmzTarget23>
{
    private XAmzTarget23(string value) : base(value)
    {
    }

    public static readonly XAmzTarget23 RekognitionServiceListTagsForResource = new(
        "RekognitionService.ListTagsForResource");

    public TResult Match<TResult>(Func<TResult> onRekognitionServiceListTagsForResource,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == RekognitionServiceListTagsForResource => onRekognitionServiceListTagsForResource(),
            _ => otherwise(Value)
        };

    public void Match(Action onRekognitionServiceListTagsForResource, Action<string> otherwise)
    {
        if (this == RekognitionServiceListTagsForResource) onRekognitionServiceListTagsForResource();
        else otherwise(Value);
    }
}
