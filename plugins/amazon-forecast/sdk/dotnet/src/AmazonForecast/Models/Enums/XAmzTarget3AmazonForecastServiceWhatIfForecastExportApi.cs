using System;
using System.Text.Json.Serialization;
using AmazonForecast.Core.Enum;

namespace AmazonForecast.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget3AmazonForecastServiceWhatIfForecastExportApi>))]
public sealed record XAmzTarget3AmazonForecastServiceWhatIfForecastExportApi : OpenStringEnum<XAmzTarget3AmazonForecastServiceWhatIfForecastExportApi>
{
    private XAmzTarget3AmazonForecastServiceWhatIfForecastExportApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget3AmazonForecastServiceWhatIfForecastExportApi AmazonForecastListWhatIfForecastExports = new(
        "AmazonForecast.ListWhatIfForecastExports");

    public TResult Match<TResult>(Func<TResult> onAmazonForecastListWhatIfForecastExports,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AmazonForecastListWhatIfForecastExports => onAmazonForecastListWhatIfForecastExports(),
            _ => otherwise(Value)
        };

    public void Match(Action onAmazonForecastListWhatIfForecastExports, Action<string> otherwise)
    {
        if (this == AmazonForecastListWhatIfForecastExports) onAmazonForecastListWhatIfForecastExports();
        else otherwise(Value);
    }
}
