using UiPath.Models;

namespace UiPath.Requests.Groups;

/// <summary>
/// The inputs of the CreateGroup operation.
/// </summary>
public sealed record CreateGroupOperationRequest
{
    /// <summary>
    /// The name of the UiPath organization
    /// </summary>
    public required string OrganizationName { get; init; }

    public required CreateGroupRequest Body { get; init; }
}
