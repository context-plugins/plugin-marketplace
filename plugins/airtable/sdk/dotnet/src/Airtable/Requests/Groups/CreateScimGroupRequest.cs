using Airtable.Models;

namespace Airtable.Requests.Groups;

/// <summary>
/// The inputs of the CreateScimGroup operation.
/// </summary>
public sealed record CreateScimGroupRequest
{
    public required ScimGroupCreateRequest Body { get; init; }
}
