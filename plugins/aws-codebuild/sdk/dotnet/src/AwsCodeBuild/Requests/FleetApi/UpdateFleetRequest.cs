using AwsCodeBuild.Models.Enums;

namespace AwsCodeBuild.Requests.FleetApi;

/// <summary>
/// The inputs of the UpdateFleet operation.
/// </summary>
public sealed record UpdateFleetRequest
{
    public required XAmzTarget4AwsCodeBuildFleetApi XAmzTarget { get; init; }
}
