using System;
using System.Text.Json.Serialization;
using AmazonForecast.Core.Enum;

namespace AmazonForecast.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget1AmazonForecastServiceWhatIfForecastExportApi>))]
public sealed record XAmzTarget1AmazonForecastServiceWhatIfForecastExportApi : OpenStringEnum<XAmzTarget1AmazonForecastServiceWhatIfForecastExportApi>
{
    private XAmzTarget1AmazonForecastServiceWhatIfForecastExportApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget1AmazonForecastServiceWhatIfForecastExportApi AmazonForecastDeleteWhatIfForecastExport = new(
        "AmazonForecast.DeleteWhatIfForecastExport");

    public TResult Match<TResult>(Func<TResult> onAmazonForecastDeleteWhatIfForecastExport,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AmazonForecastDeleteWhatIfForecastExport => onAmazonForecastDeleteWhatIfForecastExport(),
            _ => otherwise(Value)
        };

    public void Match(Action onAmazonForecastDeleteWhatIfForecastExport, Action<string> otherwise)
    {
        if (this == AmazonForecastDeleteWhatIfForecastExport) onAmazonForecastDeleteWhatIfForecastExport();
        else otherwise(Value);
    }
}
