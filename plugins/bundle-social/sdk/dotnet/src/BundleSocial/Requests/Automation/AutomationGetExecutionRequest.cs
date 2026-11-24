namespace BundleSocial.Requests.Automation;

/// <summary>
/// The inputs of the AutomationGetExecution operation.
/// </summary>
public sealed record AutomationGetExecutionRequest
{
    public required string Id { get; init; }
}
