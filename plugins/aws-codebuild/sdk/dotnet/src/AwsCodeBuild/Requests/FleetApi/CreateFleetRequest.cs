using AwsCodeBuild.Models.Enums;

namespace AwsCodeBuild.Requests.FleetApi;

/// <summary>
/// The inputs of the CreateFleet operation.
/// </summary>
public sealed record CreateFleetRequest
{
    public required XAmzTarget1AwsCodeBuildFleetApi XAmzTarget { get; init; }
}
