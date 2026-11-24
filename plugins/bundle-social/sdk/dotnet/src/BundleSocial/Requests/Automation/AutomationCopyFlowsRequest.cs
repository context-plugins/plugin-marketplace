using BundleSocial.Models;

namespace BundleSocial.Requests.Automation;

/// <summary>
/// The inputs of the AutomationCopyFlows operation.
/// </summary>
public sealed record AutomationCopyFlowsRequest
{
    /// <summary>
    /// Body
    /// </summary>
    public ApiV1AutomationsCopyRequest? Body { get; init; }
}
