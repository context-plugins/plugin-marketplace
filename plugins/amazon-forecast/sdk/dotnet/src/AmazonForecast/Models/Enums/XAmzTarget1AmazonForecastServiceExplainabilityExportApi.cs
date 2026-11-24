using System;
using System.Text.Json.Serialization;
using AmazonForecast.Core.Enum;

namespace AmazonForecast.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget1AmazonForecastServiceExplainabilityExportApi>))]
public sealed record XAmzTarget1AmazonForecastServiceExplainabilityExportApi : OpenStringEnum<XAmzTarget1AmazonForecastServiceExplainabilityExportApi>
{
    private XAmzTarget1AmazonForecastServiceExplainabilityExportApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget1AmazonForecastServiceExplainabilityExportApi AmazonForecastDeleteExplainabilityExport = new(
        "AmazonForecast.DeleteExplainabilityExport");

    public TResult Match<TResult>(Func<TResult> onAmazonForecastDeleteExplainabilityExport,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AmazonForecastDeleteExplainabilityExport => onAmazonForecastDeleteExplainabilityExport(),
            _ => otherwise(Value)
        };

    public void Match(Action onAmazonForecastDeleteExplainabilityExport, Action<string> otherwise)
    {
        if (this == AmazonForecastDeleteExplainabilityExport) onAmazonForecastDeleteExplainabilityExport();
        else otherwise(Value);
    }
}
