using System;
using System.Text.Json.Serialization;
using AmazonForecast.Core.Enum;

namespace AmazonForecast.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTargetAmazonForecastServiceWhatIfAnalysisApi>))]
public sealed record XAmzTargetAmazonForecastServiceWhatIfAnalysisApi : OpenStringEnum<XAmzTargetAmazonForecastServiceWhatIfAnalysisApi>
{
    private XAmzTargetAmazonForecastServiceWhatIfAnalysisApi(string value) : base(value)
    {
    }

    public static readonly XAmzTargetAmazonForecastServiceWhatIfAnalysisApi AmazonForecastCreateWhatIfAnalysis = new(
        "AmazonForecast.CreateWhatIfAnalysis");

    public TResult Match<TResult>(Func<TResult> onAmazonForecastCreateWhatIfAnalysis,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AmazonForecastCreateWhatIfAnalysis => onAmazonForecastCreateWhatIfAnalysis(),
            _ => otherwise(Value)
        };

    public void Match(Action onAmazonForecastCreateWhatIfAnalysis, Action<string> otherwise)
    {
        if (this == AmazonForecastCreateWhatIfAnalysis) onAmazonForecastCreateWhatIfAnalysis();
        else otherwise(Value);
    }
}
