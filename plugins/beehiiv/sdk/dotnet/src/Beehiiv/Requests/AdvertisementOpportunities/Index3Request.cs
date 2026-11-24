namespace Beehiiv.Requests.AdvertisementOpportunities;

/// <summary>
/// The inputs of the Index3 operation.
/// </summary>
public sealed record Index3Request
{
    /// <summary>
    /// The prefixed ID of the publication object
    /// </summary>
    public required string PublicationId { get; init; }

    /// <summary>
    /// Bearer authentication
    /// </summary>
    public required string Authorization { get; init; }
}
