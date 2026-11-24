using AwsCodeBuild.Models.Enums;

namespace AwsCodeBuild.Requests.Builds;

/// <summary>
/// The inputs of the StopBuild2 operation.
/// </summary>
public sealed record StopBuild2Request
{
    public required XAmzTarget5AwsCodeBuildBuildsApi XAmzTarget { get; init; }
}
