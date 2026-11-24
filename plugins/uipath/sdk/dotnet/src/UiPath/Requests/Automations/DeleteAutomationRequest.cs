namespace UiPath.Requests.Automations;

/// <summary>
/// The inputs of the DeleteAutomation operation.
/// </summary>
public sealed record DeleteAutomationRequest
{
    /// <summary>
    /// Unique integer identifier of the automation idea or project
    /// </summary>
    public required int AutomationId { get; init; }
}
