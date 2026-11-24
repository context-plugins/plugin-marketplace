namespace Contentstack.Requests.Variables;

/// <summary>
/// The inputs of the GetAllVariables operation.
/// </summary>
public sealed record GetAllVariablesRequest
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
