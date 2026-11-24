namespace Beehiiv.Requests.WebhooksApi;

/// <summary>
/// The inputs of the Delete6 operation.
/// </summary>
public sealed record Delete6Request
{
    /// <summary>
    /// The prefixed ID of the publication object
    /// </summary>
    public required string PublicationId { get; init; }

    /// <summary>
    /// The prefixed ID of the webhook object
    /// </summary>
    public required string EndpointId { get; init; }

    /// <summary>
    /// Bearer authentication
    /// </summary>
    public required string Authorization { get; init; }
}
