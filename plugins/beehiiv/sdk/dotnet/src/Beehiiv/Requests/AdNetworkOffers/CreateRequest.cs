using Beehiiv.Models;

namespace Beehiiv.Requests.AdNetworkOffers;

/// <summary>
/// The inputs of the Create operation.
/// </summary>
public sealed record CreateRequest
{
    /// <summary>
    /// The prefixed ID of the publication object
    /// </summary>
    public required string PublicationId { get; init; }

    /// <summary>
    /// Bearer authentication
    /// </summary>
    public required string Authorization { get; init; }

    public PublicationsAdNetworkOffersRequest? Body { get; init; }
}
