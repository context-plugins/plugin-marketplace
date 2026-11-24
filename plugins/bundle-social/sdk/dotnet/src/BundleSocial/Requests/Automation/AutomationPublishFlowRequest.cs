using BundleSocial.Models;

namespace BundleSocial.Requests.Automation;

/// <summary>
/// The inputs of the AutomationPublishFlow operation.
/// </summary>
public sealed record AutomationPublishFlowRequest
{
    public required string Id { get; init; }

    /// <summary>
    /// Body
    /// </summary>
    public ApiV1AutomationsPublishRequest? Body { get; init; }
}
