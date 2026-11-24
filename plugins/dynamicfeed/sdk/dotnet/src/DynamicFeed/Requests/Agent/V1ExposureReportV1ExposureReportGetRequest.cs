using DynamicFeed.Models.AnyOf;

namespace DynamicFeed.Requests.Agent;

/// <summary>
/// The inputs of the V1ExposureReportV1ExposureReportGet operation.
/// </summary>
public sealed record V1ExposureReportV1ExposureReportGetRequest
{
    public string Perils { get; init; } = "wind,flood,wildfire";

    public double Lat { get; init; } = -33.8688d;

    public double Lon { get; init; } = 151.2093d;

    public Place? Place { get; init; }

    public Organisation? Organisation { get; init; }

    public UseCase? UseCase { get; init; }
}
