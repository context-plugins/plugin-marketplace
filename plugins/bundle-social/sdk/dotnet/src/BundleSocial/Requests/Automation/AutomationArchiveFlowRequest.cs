namespace BundleSocial.Requests.Automation;

/// <summary>
/// The inputs of the AutomationArchiveFlow operation.
/// </summary>
public sealed record AutomationArchiveFlowRequest
{
    public required string Id { get; init; }
}
