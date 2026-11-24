namespace Contentstack.Requests.Automations;

/// <summary>
/// The inputs of the GetAllAutomations operation.
/// </summary>
public sealed record GetAllAutomationsRequest
{
    /// <summary>
    /// The unique identifier of the organization.
    /// </summary>
    public required string OrganizationUid { get; init; }

    /// <summary>
    /// The unique identifier of the automation project.
    /// </summary>
    public required string ProjectUid { get; init; }
}
