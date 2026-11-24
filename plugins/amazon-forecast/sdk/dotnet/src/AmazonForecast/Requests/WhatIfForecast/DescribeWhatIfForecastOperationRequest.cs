using AmazonForecast.Models.Enums;

namespace AmazonForecast.Requests.WhatIfForecast;

/// <summary>
/// The inputs of the DescribeWhatIfForecast operation.
/// </summary>
public sealed record DescribeWhatIfForecastOperationRequest
{
    public required XAmzTarget2AmazonForecastServiceWhatIfForecastApi XAmzTarget { get; init; }
}
