using AwsCodeBuild.Models.Enums;

namespace AwsCodeBuild.Requests.AwsCodebuildXAmzTargetCodebuild;

/// <summary>
/// The inputs of the UpdateWebhook operation.
/// </summary>
public sealed record UpdateWebhookRequest
{
    public required XAmzTarget19 XAmzTarget { get; init; }
}
