using AmazonForecast.Models.Enums;

namespace AmazonForecast.Requests.WhatIfForecast;

/// <summary>
/// The inputs of the DeleteWhatIfForecast operation.
/// </summary>
public sealed record DeleteWhatIfForecastOperationRequest
{
    public required XAmzTarget1AmazonForecastServiceWhatIfForecastApi XAmzTarget { get; init; }
}
