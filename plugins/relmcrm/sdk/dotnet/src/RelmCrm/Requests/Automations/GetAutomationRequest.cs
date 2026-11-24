namespace RelmCrm.Requests.Automations;

/// <summary>
/// The inputs of the GetAutomation operation.
/// </summary>
public sealed record GetAutomationRequest
{
    public required string Id { get; init; }
}
