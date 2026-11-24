using AmazonForecast.Models.Enums;

namespace AmazonForecast.Requests.WhatIfForecastExport;

/// <summary>
/// The inputs of the DescribeWhatIfForecastExport operation.
/// </summary>
public sealed record DescribeWhatIfForecastExportOperationRequest
{
    public required XAmzTarget2AmazonForecastServiceWhatIfForecastExportApi XAmzTarget { get; init; }
}
