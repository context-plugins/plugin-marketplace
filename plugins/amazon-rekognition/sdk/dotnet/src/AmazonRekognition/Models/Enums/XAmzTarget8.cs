using System;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Enum;

namespace AmazonRekognition.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget8>))]
public sealed record XAmzTarget8 : OpenStringEnum<XAmzTarget8>
{
    private XAmzTarget8(string value) : base(value)
    {
    }

    public static readonly XAmzTarget8 RekognitionServiceDistributeDatasetEntries = new(
        "RekognitionService.DistributeDatasetEntries");

    public TResult Match<TResult>(Func<TResult> onRekognitionServiceDistributeDatasetEntries,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == RekognitionServiceDistributeDatasetEntries => onRekognitionServiceDistributeDatasetEntries(),
            _ => otherwise(Value)
        };

    public void Match(Action onRekognitionServiceDistributeDatasetEntries, Action<string> otherwise)
    {
        if (this == RekognitionServiceDistributeDatasetEntries) onRekognitionServiceDistributeDatasetEntries();
        else otherwise(Value);
    }
}
