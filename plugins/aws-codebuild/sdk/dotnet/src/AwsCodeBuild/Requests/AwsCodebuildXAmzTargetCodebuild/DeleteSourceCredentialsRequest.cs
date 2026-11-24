using AwsCodeBuild.Models.Enums;

namespace AwsCodeBuild.Requests.AwsCodebuildXAmzTargetCodebuild;

/// <summary>
/// The inputs of the DeleteSourceCredentials operation.
/// </summary>
public sealed record DeleteSourceCredentialsRequest
{
    public required XAmzTarget26 XAmzTarget { get; init; }
}
