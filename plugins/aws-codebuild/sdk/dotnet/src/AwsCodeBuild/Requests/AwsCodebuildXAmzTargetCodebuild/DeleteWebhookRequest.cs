using AwsCodeBuild.Models.Enums;

namespace AwsCodeBuild.Requests.AwsCodebuildXAmzTargetCodebuild;

/// <summary>
/// The inputs of the DeleteWebhook operation.
/// </summary>
public sealed record DeleteWebhookRequest
{
    public required XAmzTarget18 XAmzTarget { get; init; }
}
