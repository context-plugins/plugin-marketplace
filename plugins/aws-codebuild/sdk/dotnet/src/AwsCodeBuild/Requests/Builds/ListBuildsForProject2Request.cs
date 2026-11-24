using AwsCodeBuild.Models.Enums;

namespace AwsCodeBuild.Requests.Builds;

/// <summary>
/// The inputs of the ListBuildsForProject2 operation.
/// </summary>
public sealed record ListBuildsForProject2Request
{
    public required XAmzTarget3AwsCodeBuildBuildsApi XAmzTarget { get; init; }
}
