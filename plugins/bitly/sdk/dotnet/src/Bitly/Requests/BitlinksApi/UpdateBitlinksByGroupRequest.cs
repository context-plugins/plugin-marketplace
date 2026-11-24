using Bitly.Models;

namespace Bitly.Requests.BitlinksApi;

/// <summary>
/// The inputs of the UpdateBitlinksByGroup operation.
/// </summary>
public sealed record UpdateBitlinksByGroupRequest
{
    /// <summary>
    /// A GUID for a Bitly group
    /// </summary>
    public required string GroupGuid { get; init; }

    public required BulkUpdateRequest Body { get; init; }
}
