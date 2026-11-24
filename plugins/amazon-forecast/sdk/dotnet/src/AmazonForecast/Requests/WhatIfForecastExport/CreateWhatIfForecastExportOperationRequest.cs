using AmazonForecast.Models.Enums;

namespace AmazonForecast.Requests.WhatIfForecastExport;

/// <summary>
/// The inputs of the CreateWhatIfForecastExport operation.
/// </summary>
public sealed record CreateWhatIfForecastExportOperationRequest
{
    public required XAmzTargetAmazonForecastServiceWhatIfForecastExportApi XAmzTarget { get; init; }
}
