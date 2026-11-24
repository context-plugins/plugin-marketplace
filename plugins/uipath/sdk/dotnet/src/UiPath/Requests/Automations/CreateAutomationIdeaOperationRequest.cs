using UiPath.Models;

namespace UiPath.Requests.Automations;

/// <summary>
/// The inputs of the CreateAutomationIdea operation.
/// </summary>
public sealed record CreateAutomationIdeaOperationRequest
{
    public required CreateAutomationIdeaRequest Body { get; init; }
}
