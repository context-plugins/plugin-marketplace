using BundleSocial.Models;

namespace BundleSocial.Requests.Automation;

/// <summary>
/// The inputs of the AutomationUpdateFlow operation.
/// </summary>
public sealed record AutomationUpdateFlowRequest
{
    public required string Id { get; init; }

    /// <summary>
    /// Body
    /// </summary>
    public ApiV1AutomationsRequest1? Body { get; init; }
}
