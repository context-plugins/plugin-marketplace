namespace Beehiiv.Requests.AdNetworkOffers;

/// <summary>
/// The inputs of the Advertisements operation.
/// </summary>
public sealed record AdvertisementsRequest
{
    /// <summary>
    /// The prefixed ID of the publication object
    /// </summary>
    public required string PublicationId { get; init; }

    /// <summary>
    /// The ID of the ad offer.
    /// </summary>
    public required string OfferId { get; init; }

    /// <summary>
    /// Bearer authentication
    /// </summary>
    public required string Authorization { get; init; }
}
