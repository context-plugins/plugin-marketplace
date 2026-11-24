using Beehiiv.Models;

namespace Beehiiv.Requests.DataDeletion;

/// <summary>
/// The inputs of the Create5 operation.
/// </summary>
public sealed record Create5Request
{
    /// <summary>
    /// The prefixed ID of the publication object
    /// </summary>
    public required string PublicationId { get; init; }

    /// <summary>
    /// Bearer authentication
    /// </summary>
    public required string Authorization { get; init; }

    public PublicationsDataPrivacyDeletionRequestsRequest? Body { get; init; }
}
