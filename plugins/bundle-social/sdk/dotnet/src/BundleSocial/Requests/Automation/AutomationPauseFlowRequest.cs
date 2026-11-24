namespace BundleSocial.Requests.Automation;

/// <summary>
/// The inputs of the AutomationPauseFlow operation.
/// </summary>
public sealed record AutomationPauseFlowRequest
{
    public required string Id { get; init; }
}
