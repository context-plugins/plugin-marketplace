using Beehiiv.Models;

namespace Beehiiv.Requests.Segments;

/// <summary>
/// The inputs of the Create9 operation.
/// </summary>
public sealed record Create9Request
{
    /// <summary>
    /// The prefixed ID of the publication object
    /// </summary>
    public required string PublicationId { get; init; }

    /// <summary>
    /// Bearer authentication
    /// </summary>
    public required string Authorization { get; init; }

    public PublicationsSegmentsRequest? Body { get; init; }
}
