using BundleSocial.Models;

namespace BundleSocial.Requests.Automation;

/// <summary>
/// The inputs of the AutomationTestFlow operation.
/// </summary>
public sealed record AutomationTestFlowRequest
{
    public required string Id { get; init; }

    /// <summary>
    /// Body
    /// </summary>
    public ApiV1AutomationsTestRequest? Body { get; init; }
}
