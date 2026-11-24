using RelmCrm.Models;

namespace RelmCrm.Requests.Automations;

/// <summary>
/// The inputs of the SetAutomationEnabled operation.
/// </summary>
public sealed record SetAutomationEnabledRequest
{
    public required string Id { get; init; }

    public required AutomationsRequest Body { get; init; }
}
