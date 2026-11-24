namespace Beehiiv.Requests.Segments;

/// <summary>
/// The inputs of the Recalculate operation.
/// </summary>
public sealed record RecalculateRequest
{
    /// <summary>
    /// The prefixed ID of the publication object
    /// </summary>
    public required string PublicationId { get; init; }

    /// <summary>
    /// The prefixed ID of the segment object
    /// </summary>
    public required string SegmentId { get; init; }

    /// <summary>
    /// Bearer authentication
    /// </summary>
    public required string Authorization { get; init; }
}
