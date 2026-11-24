namespace Soda.Requests.Users;

/// <summary>
/// The inputs of the GetApiV1UserGroups operation.
/// </summary>
public sealed record GetApiV1UserGroupsRequest
{
    public int? Page { get; init; }

    public string? Search { get; init; }

    public int? Size { get; init; }
}
