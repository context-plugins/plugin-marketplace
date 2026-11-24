using UiPath.Models;

namespace UiPath.Requests.Automations;

/// <summary>
/// The inputs of the UpdateAutomation operation.
/// </summary>
public sealed record UpdateAutomationOperationRequest
{
    /// <summary>
    /// Unique integer identifier of the automation idea or project
    /// </summary>
    public required int AutomationId { get; init; }

    public required UpdateAutomationRequest Body { get; init; }
}
