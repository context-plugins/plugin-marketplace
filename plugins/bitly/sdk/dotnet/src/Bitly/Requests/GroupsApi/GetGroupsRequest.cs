namespace Bitly.Requests.GroupsApi;

/// <summary>
/// The inputs of the GetGroups operation.
/// </summary>
public sealed record GetGroupsRequest
{
    /// <summary>
    /// A GUID for a Bitly organization
    /// </summary>
    public string? OrganizationGuid { get; init; }
}
