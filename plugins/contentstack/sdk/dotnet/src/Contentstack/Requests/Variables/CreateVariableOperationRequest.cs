using Contentstack.Models;

namespace Contentstack.Requests.Variables;

/// <summary>
/// The inputs of the CreateVariable operation.
/// </summary>
public sealed record CreateVariableOperationRequest
{
    /// <summary>
    /// The unique identifier of the organization.
    /// </summary>
    public required string OrganizationUid { get; init; }

    /// <summary>
    /// The unique identifier of the automation project.
    /// </summary>
    public required string ProjectUid { get; init; }

    public required CreateVariableRequest Body { get; init; }
}
