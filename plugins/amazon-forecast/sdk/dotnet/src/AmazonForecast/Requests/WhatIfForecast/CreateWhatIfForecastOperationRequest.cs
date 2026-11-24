using AmazonForecast.Models.Enums;

namespace AmazonForecast.Requests.WhatIfForecast;

/// <summary>
/// The inputs of the CreateWhatIfForecast operation.
/// </summary>
public sealed record CreateWhatIfForecastOperationRequest
{
    public required XAmzTargetAmazonForecastServiceWhatIfForecastApi XAmzTarget { get; init; }
}
