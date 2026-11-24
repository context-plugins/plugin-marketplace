using AmazonForecast.Models.Enums;

namespace AmazonForecast.Requests.WhatIfAnalysis;

/// <summary>
/// The inputs of the CreateWhatIfAnalysis operation.
/// </summary>
public sealed record CreateWhatIfAnalysisOperationRequest
{
    public required XAmzTargetAmazonForecastServiceWhatIfAnalysisApi XAmzTarget { get; init; }
}
