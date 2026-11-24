using RelmCrm.Models;

namespace RelmCrm.Requests.Automations;

/// <summary>
/// The inputs of the CreateAutomation operation.
/// </summary>
public sealed record CreateAutomationRequest
{
    public required AutomationInput Body { get; init; }
}
