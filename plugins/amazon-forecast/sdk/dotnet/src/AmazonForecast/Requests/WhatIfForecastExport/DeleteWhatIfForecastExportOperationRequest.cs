using AmazonForecast.Models.Enums;

namespace AmazonForecast.Requests.WhatIfForecastExport;

/// <summary>
/// The inputs of the DeleteWhatIfForecastExport operation.
/// </summary>
public sealed record DeleteWhatIfForecastExportOperationRequest
{
    public required XAmzTarget1AmazonForecastServiceWhatIfForecastExportApi XAmzTarget { get; init; }
}
