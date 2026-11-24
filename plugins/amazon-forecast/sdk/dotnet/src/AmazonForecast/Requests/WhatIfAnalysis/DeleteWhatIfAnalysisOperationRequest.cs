using AmazonForecast.Models.Enums;

namespace AmazonForecast.Requests.WhatIfAnalysis;

/// <summary>
/// The inputs of the DeleteWhatIfAnalysis operation.
/// </summary>
public sealed record DeleteWhatIfAnalysisOperationRequest
{
    public required XAmzTarget1AmazonForecastServiceWhatIfAnalysisApi XAmzTarget { get; init; }
}
