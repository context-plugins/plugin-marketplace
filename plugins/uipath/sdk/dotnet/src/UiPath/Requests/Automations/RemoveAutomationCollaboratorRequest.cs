namespace UiPath.Requests.Automations;

/// <summary>
/// The inputs of the RemoveAutomationCollaborator operation.
/// </summary>
public sealed record RemoveAutomationCollaboratorRequest
{
    /// <summary>
    /// Unique integer identifier of the automation idea or project
    /// </summary>
    public required int AutomationId { get; init; }

    /// <summary>
    /// Unique identifier of the user to remove as a collaborator
    /// </summary>
    public required int UserId { get; init; }
}
