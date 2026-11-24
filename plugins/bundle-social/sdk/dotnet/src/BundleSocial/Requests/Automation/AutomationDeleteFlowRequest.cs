namespace BundleSocial.Requests.Automation;

/// <summary>
/// The inputs of the AutomationDeleteFlow operation.
/// </summary>
public sealed record AutomationDeleteFlowRequest
{
    public required string Id { get; init; }
}
