namespace BundleSocial.Requests.Automation;

/// <summary>
/// The inputs of the AutomationGetFlow operation.
/// </summary>
public sealed record AutomationGetFlowRequest
{
    public required string Id { get; init; }
}
