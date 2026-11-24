using System;
using System.Text.Json.Serialization;
using AmazonForecast.Core.Enum;

namespace AmazonForecast.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget2AmazonForecastServiceWhatIfForecastExportApi>))]
public sealed record XAmzTarget2AmazonForecastServiceWhatIfForecastExportApi : OpenStringEnum<XAmzTarget2AmazonForecastServiceWhatIfForecastExportApi>
{
    private XAmzTarget2AmazonForecastServiceWhatIfForecastExportApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget2AmazonForecastServiceWhatIfForecastExportApi AmazonForecastDescribeWhatIfForecastExport = new(
        "AmazonForecast.DescribeWhatIfForecastExport");

    public TResult Match<TResult>(Func<TResult> onAmazonForecastDescribeWhatIfForecastExport,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AmazonForecastDescribeWhatIfForecastExport => onAmazonForecastDescribeWhatIfForecastExport(),
            _ => otherwise(Value)
        };

    public void Match(Action onAmazonForecastDescribeWhatIfForecastExport, Action<string> otherwise)
    {
        if (this == AmazonForecastDescribeWhatIfForecastExport) onAmazonForecastDescribeWhatIfForecastExport();
        else otherwise(Value);
    }
}
