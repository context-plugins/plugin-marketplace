using AmazonForecast.Models.Enums;

namespace AmazonForecast.Requests.WhatIfForecastExport;

/// <summary>
/// The inputs of the ListWhatIfForecastExports operation.
/// </summary>
public sealed record ListWhatIfForecastExportsOperationRequest
{
    public required XAmzTarget3AmazonForecastServiceWhatIfForecastExportApi XAmzTarget { get; init; }
}
