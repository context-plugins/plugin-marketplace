namespace Beehiiv.Requests.AdNetworkOffers;

/// <summary>
/// The inputs of the Index operation.
/// </summary>
public sealed record IndexRequest
{
    /// <summary>
    /// The prefixed ID of the publication object
    /// </summary>
    public required string PublicationId { get; init; }

    /// <summary>
    /// A source identifier for where the offers request originated.
    /// </summary>
    public string? RequestedFrom { get; init; }

    /// <summary>
    /// Bearer authentication
    /// </summary>
    public required string Authorization { get; init; }
}
