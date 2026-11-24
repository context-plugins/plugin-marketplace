namespace Airtable.Requests.Groups;

/// <summary>
/// The inputs of the DeleteScimGroup operation.
/// </summary>
public sealed record DeleteScimGroupRequest
{
    /// <summary>
    /// The unique identifier of the SCIM group resource.
    /// </summary>
    public required string GroupId { get; init; }
}
