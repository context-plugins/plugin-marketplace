namespace RelmCrm.Requests.Automations;

/// <summary>
/// The inputs of the DeleteAutomation operation.
/// </summary>
public sealed record DeleteAutomationRequest
{
    public required string Id { get; init; }
}
