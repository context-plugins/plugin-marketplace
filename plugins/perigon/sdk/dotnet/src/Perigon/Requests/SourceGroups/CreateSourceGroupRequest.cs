using Perigon.Models;

namespace Perigon.Requests.SourceGroups;

/// <summary>
/// The inputs of the CreateSourceGroup operation.
/// </summary>
public sealed record CreateSourceGroupRequest
{
    public required CreateSourceGroupParams Body { get; init; }
}
