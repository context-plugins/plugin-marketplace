namespace UiPath.Requests.Automations;

/// <summary>
/// The inputs of the ListAutomationCollaborators operation.
/// </summary>
public sealed record ListAutomationCollaboratorsRequest
{
    /// <summary>
    /// Unique integer identifier of the automation idea or project
    /// </summary>
    public required int AutomationId { get; init; }
}
