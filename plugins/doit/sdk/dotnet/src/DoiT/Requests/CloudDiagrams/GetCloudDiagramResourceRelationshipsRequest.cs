using DoiT.Models.Enums;

namespace DoiT.Requests.CloudDiagrams;

/// <summary>
/// The inputs of the GetCloudDiagramResourceRelationships operation.
/// </summary>
public sealed record GetCloudDiagramResourceRelationshipsRequest
{
    /// <summary>
    /// Diagram (layer) ID.
    /// </summary>
    public required string Id { get; init; }

    /// <summary>
    /// Anchor resource ID — must exist as a node, element, or group on the diagram.
    /// </summary>
    public required string Rid { get; init; }

    /// <summary>
    /// Edge direction relative to the anchor. <c>both</c> returns upstream and downstream neighbours. Defaults to <c>both</c>.
    /// </summary>
    public Direction Direction { get; init; } = Direction.Both;

    /// <summary>
    /// <c>direct</c> returns one-hop neighbours; <c>transitive</c> runs a cycle-safe BFS to the
    /// connected component (still capped at 200 relations). Defaults to <c>direct</c>.
    /// </summary>
    public Depth Depth { get; init; } = Depth.Direct;

    /// <summary>
    /// <c>edges</c> walks the link graph; <c>group_members</c> walks group membership (children
    /// and parent groups); <c>both</c> merges the two and dedupes by id, preserving the
    /// smallest observed hop count. Defaults to <c>edges</c>.
    /// </summary>
    public Kind Kind { get; init; } = Kind.Edges;
}
