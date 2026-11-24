using AmazonForecast.Models.Enums;

namespace AmazonForecast.Requests.WhatIfAnalysis;

/// <summary>
/// The inputs of the DescribeWhatIfAnalysis operation.
/// </summary>
public sealed record DescribeWhatIfAnalysisOperationRequest
{
    public required XAmzTarget2AmazonForecastServiceWhatIfAnalysisApi XAmzTarget { get; init; }
}
