using AwsCodeBuild.Models.Enums;

namespace AwsCodeBuild.Requests.FleetApi;

/// <summary>
/// The inputs of the ListFleets operation.
/// </summary>
public sealed record ListFleetsRequest
{
    public required XAmzTarget3AwsCodeBuildFleetApi XAmzTarget { get; init; }
}
