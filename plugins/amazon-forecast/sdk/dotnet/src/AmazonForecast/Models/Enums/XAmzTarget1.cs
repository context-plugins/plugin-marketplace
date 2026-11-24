using System;
using System.Text.Json.Serialization;
using AmazonForecast.Core.Enum;

namespace AmazonForecast.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget1>))]
public sealed record XAmzTarget1 : OpenStringEnum<XAmzTarget1>
{
    private XAmzTarget1(string value) : base(value)
    {
    }

    public static readonly XAmzTarget1 AmazonForecastDeleteDatasetGroup = new("AmazonForecast.DeleteDatasetGroup");

    public TResult Match<TResult>(Func<TResult> onAmazonForecastDeleteDatasetGroup, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AmazonForecastDeleteDatasetGroup => onAmazonForecastDeleteDatasetGroup(),
            _ => otherwise(Value)
        };

    public void Match(Action onAmazonForecastDeleteDatasetGroup, Action<string> otherwise)
    {
        if (this == AmazonForecastDeleteDatasetGroup) onAmazonForecastDeleteDatasetGroup();
        else otherwise(Value);
    }
}
