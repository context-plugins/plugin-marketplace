using Perigon.Models;

namespace Perigon.Requests.SourceGroups;

/// <summary>
/// The inputs of the UpdateSourceGroup operation.
/// </summary>
public sealed record UpdateSourceGroupRequest
{
    public required int Id { get; init; }

    public required PatchSourceGroupParams Body { get; init; }
}
