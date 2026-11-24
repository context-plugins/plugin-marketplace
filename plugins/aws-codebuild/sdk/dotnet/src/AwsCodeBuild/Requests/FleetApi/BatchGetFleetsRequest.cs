using AwsCodeBuild.Models.Enums;

namespace AwsCodeBuild.Requests.FleetApi;

/// <summary>
/// The inputs of the BatchGetFleets operation.
/// </summary>
public sealed record BatchGetFleetsRequest
{
    public required XAmzTargetAwsCodeBuildFleetApi XAmzTarget { get; init; }
}
