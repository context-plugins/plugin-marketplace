using System;
using System.Text.Json.Serialization;
using AmazonForecast.Core.Enum;

namespace AmazonForecast.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTargetAmazonForecastServiceExplainabilityExportApi>))]
public sealed record XAmzTargetAmazonForecastServiceExplainabilityExportApi : OpenStringEnum<XAmzTargetAmazonForecastServiceExplainabilityExportApi>
{
    private XAmzTargetAmazonForecastServiceExplainabilityExportApi(string value) : base(value)
    {
    }

    public static readonly XAmzTargetAmazonForecastServiceExplainabilityExportApi AmazonForecastCreateExplainabilityExport = new(
        "AmazonForecast.CreateExplainabilityExport");

    public TResult Match<TResult>(Func<TResult> onAmazonForecastCreateExplainabilityExport,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AmazonForecastCreateExplainabilityExport => onAmazonForecastCreateExplainabilityExport(),
            _ => otherwise(Value)
        };

    public void Match(Action onAmazonForecastCreateExplainabilityExport, Action<string> otherwise)
    {
        if (this == AmazonForecastCreateExplainabilityExport) onAmazonForecastCreateExplainabilityExport();
        else otherwise(Value);
    }
}
