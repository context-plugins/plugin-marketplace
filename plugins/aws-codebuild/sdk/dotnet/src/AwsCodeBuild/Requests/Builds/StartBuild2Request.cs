using AwsCodeBuild.Models.Enums;

namespace AwsCodeBuild.Requests.Builds;

/// <summary>
/// The inputs of the StartBuild2 operation.
/// </summary>
public sealed record StartBuild2Request
{
    public required XAmzTarget4AwsCodeBuildBuildsApi XAmzTarget { get; init; }
}
