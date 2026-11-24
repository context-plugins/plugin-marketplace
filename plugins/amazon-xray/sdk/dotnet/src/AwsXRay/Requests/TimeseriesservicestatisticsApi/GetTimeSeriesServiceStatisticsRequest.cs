using AwsXRay.Models;

namespace AwsXRay.Requests.TimeseriesservicestatisticsApi;

/// <summary>
/// The inputs of the GetTimeSeriesServiceStatistics operation.
/// </summary>
public sealed record GetTimeSeriesServiceStatisticsRequest
{
    public TimeSeriesServiceStatisticsRequest? Body { get; init; }
}
