using System;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Enum;

namespace AmazonRekognition.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget1AmazonRekognitionDatasetApi>))]
public sealed record XAmzTarget1AmazonRekognitionDatasetApi : OpenStringEnum<XAmzTarget1AmazonRekognitionDatasetApi>
{
    private XAmzTarget1AmazonRekognitionDatasetApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget1AmazonRekognitionDatasetApi RekognitionServiceDeleteDataset = new(
        "RekognitionService.DeleteDataset");

    public TResult Match<TResult>(Func<TResult> onRekognitionServiceDeleteDataset, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == RekognitionServiceDeleteDataset => onRekognitionServiceDeleteDataset(),
            _ => otherwise(Value)
        };

    public void Match(Action onRekognitionServiceDeleteDataset, Action<string> otherwise)
    {
        if (this == RekognitionServiceDeleteDataset) onRekognitionServiceDeleteDataset();
        else otherwise(Value);
    }
}
