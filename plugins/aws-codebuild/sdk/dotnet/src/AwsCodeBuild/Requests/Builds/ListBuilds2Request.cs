using AwsCodeBuild.Models.Enums;

namespace AwsCodeBuild.Requests.Builds;

/// <summary>
/// The inputs of the ListBuilds2 operation.
/// </summary>
public sealed record ListBuilds2Request
{
    public required XAmzTarget2AwsCodeBuildBuildsApi XAmzTarget { get; init; }
}
