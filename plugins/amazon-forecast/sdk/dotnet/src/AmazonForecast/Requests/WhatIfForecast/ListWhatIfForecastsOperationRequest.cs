using AmazonForecast.Models.Enums;

namespace AmazonForecast.Requests.WhatIfForecast;

/// <summary>
/// The inputs of the ListWhatIfForecasts operation.
/// </summary>
public sealed record ListWhatIfForecastsOperationRequest
{
    public required XAmzTarget3AmazonForecastServiceWhatIfForecastApi XAmzTarget { get; init; }
}
