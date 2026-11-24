using AwsCodeBuild.Models.Enums;

namespace AwsCodeBuild.Requests.AwsCodebuildXAmzTargetCodebuild;

/// <summary>
/// The inputs of the ListCuratedEnvironmentImages operation.
/// </summary>
public sealed record ListCuratedEnvironmentImagesRequest
{
    public required XAmzTarget34 XAmzTarget { get; init; }
}
