namespace UiPath.Requests.Automations;

/// <summary>
/// The inputs of the GetAutomation operation.
/// </summary>
public sealed record GetAutomationRequest
{
    /// <summary>
    /// Unique integer identifier of the automation idea or project
    /// </summary>
    public required int AutomationId { get; init; }
}
