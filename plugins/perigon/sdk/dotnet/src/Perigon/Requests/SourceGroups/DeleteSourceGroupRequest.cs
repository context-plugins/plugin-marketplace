namespace Perigon.Requests.SourceGroups;

/// <summary>
/// The inputs of the DeleteSourceGroup operation.
/// </summary>
public sealed record DeleteSourceGroupRequest
{
    public required int Id { get; init; }
}
