using System;
using System.Text.Json.Serialization;
using AmazonForecast.Core.Enum;

namespace AmazonForecast.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget1AmazonForecastServiceWhatIfAnalysisApi>))]
public sealed record XAmzTarget1AmazonForecastServiceWhatIfAnalysisApi : OpenStringEnum<XAmzTarget1AmazonForecastServiceWhatIfAnalysisApi>
{
    private XAmzTarget1AmazonForecastServiceWhatIfAnalysisApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget1AmazonForecastServiceWhatIfAnalysisApi AmazonForecastDeleteWhatIfAnalysis = new(
        "AmazonForecast.DeleteWhatIfAnalysis");

    public TResult Match<TResult>(Func<TResult> onAmazonForecastDeleteWhatIfAnalysis,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AmazonForecastDeleteWhatIfAnalysis => onAmazonForecastDeleteWhatIfAnalysis(),
            _ => otherwise(Value)
        };

    public void Match(Action onAmazonForecastDeleteWhatIfAnalysis, Action<string> otherwise)
    {
        if (this == AmazonForecastDeleteWhatIfAnalysis) onAmazonForecastDeleteWhatIfAnalysis();
        else otherwise(Value);
    }
}
