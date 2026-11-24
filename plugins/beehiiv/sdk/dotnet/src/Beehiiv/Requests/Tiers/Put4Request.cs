using Beehiiv.Models;

namespace Beehiiv.Requests.Tiers;

/// <summary>
/// The inputs of the Put4 operation.
/// </summary>
public sealed record Put4Request
{
    /// <summary>
    /// The prefixed ID of the publication object
    /// </summary>
    public required string PublicationId { get; init; }

    /// <summary>
    /// The prefixed ID of the tier object
    /// </summary>
    public required string TierId { get; init; }

    /// <summary>
    /// Bearer authentication
    /// </summary>
    public required string Authorization { get; init; }

    public PublicationsTiersRequest1? Body { get; init; }
}
