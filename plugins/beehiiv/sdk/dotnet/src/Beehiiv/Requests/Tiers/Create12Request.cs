using Beehiiv.Models;

namespace Beehiiv.Requests.Tiers;

/// <summary>
/// The inputs of the Create12 operation.
/// </summary>
public sealed record Create12Request
{
    /// <summary>
    /// The prefixed ID of the publication object
    /// </summary>
    public required string PublicationId { get; init; }

    /// <summary>
    /// Bearer authentication
    /// </summary>
    public required string Authorization { get; init; }

    public PublicationsTiersRequest? Body { get; init; }
}
