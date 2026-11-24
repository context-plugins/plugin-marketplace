using System;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Enum;

namespace AmazonRekognition.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget22>))]
public sealed record XAmzTarget22 : OpenStringEnum<XAmzTarget22>
{
    private XAmzTarget22(string value) : base(value)
    {
    }

    public static readonly XAmzTarget22 RekognitionServiceListDatasetLabels = new(
        "RekognitionService.ListDatasetLabels");

    public TResult Match<TResult>(Func<TResult> onRekognitionServiceListDatasetLabels,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == RekognitionServiceListDatasetLabels => onRekognitionServiceListDatasetLabels(),
            _ => otherwise(Value)
        };

    public void Match(Action onRekognitionServiceListDatasetLabels, Action<string> otherwise)
    {
        if (this == RekognitionServiceListDatasetLabels) onRekognitionServiceListDatasetLabels();
        else otherwise(Value);
    }
}
