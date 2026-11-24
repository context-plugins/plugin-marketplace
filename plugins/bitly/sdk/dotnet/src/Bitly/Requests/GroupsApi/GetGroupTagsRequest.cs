using Bitly.Models.Enums;

namespace Bitly.Requests.GroupsApi;

/// <summary>
/// The inputs of the GetGroupTags operation.
/// </summary>
public sealed record GetGroupTagsRequest
{
    /// <summary>
    /// A GUID for a Bitly group
    /// </summary>
    public required string GroupGuid { get; init; }

    /// <summary>
    /// Tag set to return; defaults to bitlink
    /// </summary>
    public TypeEnum Type { get; init; } = TypeEnum.Bitlink;
}
