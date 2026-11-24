using System;
using System.Text.Json.Serialization;
using AmazonForecast.Core.Enum;

namespace AmazonForecast.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget2AmazonForecastServiceWhatIfAnalysisApi>))]
public sealed record XAmzTarget2AmazonForecastServiceWhatIfAnalysisApi : OpenStringEnum<XAmzTarget2AmazonForecastServiceWhatIfAnalysisApi>
{
    private XAmzTarget2AmazonForecastServiceWhatIfAnalysisApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget2AmazonForecastServiceWhatIfAnalysisApi AmazonForecastDescribeWhatIfAnalysis = new(
        "AmazonForecast.DescribeWhatIfAnalysis");

    public TResult Match<TResult>(Func<TResult> onAmazonForecastDescribeWhatIfAnalysis,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AmazonForecastDescribeWhatIfAnalysis => onAmazonForecastDescribeWhatIfAnalysis(),
            _ => otherwise(Value)
        };

    public void Match(Action onAmazonForecastDescribeWhatIfAnalysis, Action<string> otherwise)
    {
        if (this == AmazonForecastDescribeWhatIfAnalysis) onAmazonForecastDescribeWhatIfAnalysis();
        else otherwise(Value);
    }
}
