namespace BundleSocial.Requests.Automation;

/// <summary>
/// The inputs of the AutomationActivateFlow operation.
/// </summary>
public sealed record AutomationActivateFlowRequest
{
    public required string Id { get; init; }
}
