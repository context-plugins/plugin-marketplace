using System;
using System.Text.Json.Serialization;
using AmazonForecast.Core.Enum;

namespace AmazonForecast.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget3>))]
public sealed record XAmzTarget3 : OpenStringEnum<XAmzTarget3>
{
    private XAmzTarget3(string value) : base(value)
    {
    }

    public static readonly XAmzTarget3 AmazonForecastListDatasetGroups = new("AmazonForecast.ListDatasetGroups");

    public TResult Match<TResult>(Func<TResult> onAmazonForecastListDatasetGroups, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AmazonForecastListDatasetGroups => onAmazonForecastListDatasetGroups(),
            _ => otherwise(Value)
        };

    public void Match(Action onAmazonForecastListDatasetGroups, Action<string> otherwise)
    {
        if (this == AmazonForecastListDatasetGroups) onAmazonForecastListDatasetGroups();
        else otherwise(Value);
    }
}
