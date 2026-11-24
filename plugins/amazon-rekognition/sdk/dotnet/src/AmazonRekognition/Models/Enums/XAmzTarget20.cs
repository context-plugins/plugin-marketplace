using System;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Enum;

namespace AmazonRekognition.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget20>))]
public sealed record XAmzTarget20 : OpenStringEnum<XAmzTarget20>
{
    private XAmzTarget20(string value) : base(value)
    {
    }

    public static readonly XAmzTarget20 RekognitionServiceListDatasetEntries = new(
        "RekognitionService.ListDatasetEntries");

    public TResult Match<TResult>(Func<TResult> onRekognitionServiceListDatasetEntries,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == RekognitionServiceListDatasetEntries => onRekognitionServiceListDatasetEntries(),
            _ => otherwise(Value)
        };

    public void Match(Action onRekognitionServiceListDatasetEntries, Action<string> otherwise)
    {
        if (this == RekognitionServiceListDatasetEntries) onRekognitionServiceListDatasetEntries();
        else otherwise(Value);
    }
}
