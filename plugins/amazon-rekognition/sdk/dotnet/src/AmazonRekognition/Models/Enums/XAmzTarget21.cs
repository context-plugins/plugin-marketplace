using System;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Enum;

namespace AmazonRekognition.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget21>))]
public sealed record XAmzTarget21 : OpenStringEnum<XAmzTarget21>
{
    private XAmzTarget21(string value) : base(value)
    {
    }

    public static readonly XAmzTarget21 RekognitionServiceUpdateDatasetEntries = new(
        "RekognitionService.UpdateDatasetEntries");

    public TResult Match<TResult>(Func<TResult> onRekognitionServiceUpdateDatasetEntries,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == RekognitionServiceUpdateDatasetEntries => onRekognitionServiceUpdateDatasetEntries(),
            _ => otherwise(Value)
        };

    public void Match(Action onRekognitionServiceUpdateDatasetEntries, Action<string> otherwise)
    {
        if (this == RekognitionServiceUpdateDatasetEntries) onRekognitionServiceUpdateDatasetEntries();
        else otherwise(Value);
    }
}
