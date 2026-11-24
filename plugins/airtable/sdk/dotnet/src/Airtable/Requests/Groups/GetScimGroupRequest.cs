namespace Airtable.Requests.Groups;

/// <summary>
/// The inputs of the GetScimGroup operation.
/// </summary>
public sealed record GetScimGroupRequest
{
    /// <summary>
    /// The unique identifier of the SCIM group resource.
    /// </summary>
    public required string GroupId { get; init; }
}
