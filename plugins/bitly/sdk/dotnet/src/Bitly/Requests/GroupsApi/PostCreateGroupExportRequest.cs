using Bitly.Models;

namespace Bitly.Requests.GroupsApi;

/// <summary>
/// The inputs of the PostCreateGroupExport operation.
/// </summary>
public sealed record PostCreateGroupExportRequest
{
    /// <summary>
    /// A GUID for a Bitly group
    /// </summary>
    public required string GroupGuid { get; init; }

    public required GroupExportRequestBody Body { get; init; }
}
