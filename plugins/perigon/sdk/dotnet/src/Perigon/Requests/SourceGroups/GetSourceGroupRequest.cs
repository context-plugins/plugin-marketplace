namespace Perigon.Requests.SourceGroups;

/// <summary>
/// The inputs of the GetSourceGroup operation.
/// </summary>
public sealed record GetSourceGroupRequest
{
    public required int Id { get; init; }
}
