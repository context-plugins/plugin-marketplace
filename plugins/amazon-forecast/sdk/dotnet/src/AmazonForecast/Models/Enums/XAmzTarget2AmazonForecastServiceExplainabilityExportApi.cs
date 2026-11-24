using System;
using System.Text.Json.Serialization;
using AmazonForecast.Core.Enum;

namespace AmazonForecast.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget2AmazonForecastServiceExplainabilityExportApi>))]
public sealed record XAmzTarget2AmazonForecastServiceExplainabilityExportApi : OpenStringEnum<XAmzTarget2AmazonForecastServiceExplainabilityExportApi>
{
    private XAmzTarget2AmazonForecastServiceExplainabilityExportApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget2AmazonForecastServiceExplainabilityExportApi AmazonForecastDescribeExplainabilityExport = new(
        "AmazonForecast.DescribeExplainabilityExport");

    public TResult Match<TResult>(Func<TResult> onAmazonForecastDescribeExplainabilityExport,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AmazonForecastDescribeExplainabilityExport => onAmazonForecastDescribeExplainabilityExport(),
            _ => otherwise(Value)
        };

    public void Match(Action onAmazonForecastDescribeExplainabilityExport, Action<string> otherwise)
    {
        if (this == AmazonForecastDescribeExplainabilityExport) onAmazonForecastDescribeExplainabilityExport();
        else otherwise(Value);
    }
}
