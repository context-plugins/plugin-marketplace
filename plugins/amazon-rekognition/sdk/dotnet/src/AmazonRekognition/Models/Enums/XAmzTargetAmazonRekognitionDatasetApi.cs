using System;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Enum;

namespace AmazonRekognition.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTargetAmazonRekognitionDatasetApi>))]
public sealed record XAmzTargetAmazonRekognitionDatasetApi : OpenStringEnum<XAmzTargetAmazonRekognitionDatasetApi>
{
    private XAmzTargetAmazonRekognitionDatasetApi(string value) : base(value)
    {
    }

    public static readonly XAmzTargetAmazonRekognitionDatasetApi RekognitionServiceCreateDataset = new(
        "RekognitionService.CreateDataset");

    public TResult Match<TResult>(Func<TResult> onRekognitionServiceCreateDataset, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == RekognitionServiceCreateDataset => onRekognitionServiceCreateDataset(),
            _ => otherwise(Value)
        };

    public void Match(Action onRekognitionServiceCreateDataset, Action<string> otherwise)
    {
        if (this == RekognitionServiceCreateDataset) onRekognitionServiceCreateDataset();
        else otherwise(Value);
    }
}
