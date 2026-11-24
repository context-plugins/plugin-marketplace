namespace Contentstack.Requests.Automations;

/// <summary>
/// The inputs of the ActivateAutomation operation.
/// </summary>
public sealed record ActivateAutomationRequest
{
    /// <summary>
    /// The unique identifier of the organization.
    /// </summary>
    public required string OrganizationUid { get; init; }

    /// <summary>
    /// The unique identifier of the automation project.
    /// </summary>
    public required string ProjectUid { get; init; }

    /// <summary>
    /// The unique identifier of the automation.
    /// </summary>
    public required string AutomationUid { get; init; }
}
