using System;
using System.Text.Json.Serialization;
using AmazonForecast.Core.Enum;

namespace AmazonForecast.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTargetAmazonForecastServiceWhatIfForecastExportApi>))]
public sealed record XAmzTargetAmazonForecastServiceWhatIfForecastExportApi : OpenStringEnum<XAmzTargetAmazonForecastServiceWhatIfForecastExportApi>
{
    private XAmzTargetAmazonForecastServiceWhatIfForecastExportApi(string value) : base(value)
    {
    }

    public static readonly XAmzTargetAmazonForecastServiceWhatIfForecastExportApi AmazonForecastCreateWhatIfForecastExport = new(
        "AmazonForecast.CreateWhatIfForecastExport");

    public TResult Match<TResult>(Func<TResult> onAmazonForecastCreateWhatIfForecastExport,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AmazonForecastCreateWhatIfForecastExport => onAmazonForecastCreateWhatIfForecastExport(),
            _ => otherwise(Value)
        };

    public void Match(Action onAmazonForecastCreateWhatIfForecastExport, Action<string> otherwise)
    {
        if (this == AmazonForecastCreateWhatIfForecastExport) onAmazonForecastCreateWhatIfForecastExport();
        else otherwise(Value);
    }
}
