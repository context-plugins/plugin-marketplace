using AwsCodeBuild.Models.Enums;

namespace AwsCodeBuild.Requests.AwsCodebuildXAmzTargetCodebuild;

/// <summary>
/// The inputs of the ListSourceCredentials operation.
/// </summary>
public sealed record ListSourceCredentialsRequest
{
    public required XAmzTarget28 XAmzTarget { get; init; }
}
