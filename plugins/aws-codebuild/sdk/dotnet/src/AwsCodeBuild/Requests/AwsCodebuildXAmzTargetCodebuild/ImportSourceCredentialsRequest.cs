using AwsCodeBuild.Models.Enums;

namespace AwsCodeBuild.Requests.AwsCodebuildXAmzTargetCodebuild;

/// <summary>
/// The inputs of the ImportSourceCredentials operation.
/// </summary>
public sealed record ImportSourceCredentialsRequest
{
    public required XAmzTarget27 XAmzTarget { get; init; }
}
