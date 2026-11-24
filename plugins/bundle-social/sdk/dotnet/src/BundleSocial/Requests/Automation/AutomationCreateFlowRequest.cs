using BundleSocial.Models;

namespace BundleSocial.Requests.Automation;

/// <summary>
/// The inputs of the AutomationCreateFlow operation.
/// </summary>
public sealed record AutomationCreateFlowRequest
{
    /// <summary>
    /// Body
    /// </summary>
    public ApiV1AutomationsRequest? Body { get; init; }
}
