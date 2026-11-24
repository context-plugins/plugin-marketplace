using Beehiiv.Models;

namespace Beehiiv.Requests.WebhooksApi;

/// <summary>
/// The inputs of the Create13 operation.
/// </summary>
public sealed record Create13Request
{
    /// <summary>
    /// The prefixed ID of the publication object
    /// </summary>
    public required string PublicationId { get; init; }

    /// <summary>
    /// Bearer authentication
    /// </summary>
    public required string Authorization { get; init; }

    public PublicationsWebhooksRequest? Body { get; init; }
}
