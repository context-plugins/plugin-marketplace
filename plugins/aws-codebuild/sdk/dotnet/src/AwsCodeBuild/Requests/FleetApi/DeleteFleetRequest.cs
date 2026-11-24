using AwsCodeBuild.Models.Enums;

namespace AwsCodeBuild.Requests.FleetApi;

/// <summary>
/// The inputs of the DeleteFleet operation.
/// </summary>
public sealed record DeleteFleetRequest
{
    public required XAmzTarget2AwsCodeBuildFleetApi XAmzTarget { get; init; }
}
