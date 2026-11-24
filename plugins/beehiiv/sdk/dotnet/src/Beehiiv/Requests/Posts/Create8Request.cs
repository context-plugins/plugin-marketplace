using Beehiiv.Models;

namespace Beehiiv.Requests.Posts;

/// <summary>
/// The inputs of the Create8 operation.
/// </summary>
public sealed record Create8Request
{
    /// <summary>
    /// The prefixed ID of the publication object
    /// </summary>
    public required string PublicationId { get; init; }

    /// <summary>
    /// Bearer authentication
    /// </summary>
    public required string Authorization { get; init; }

    public PublicationsPostsRequest? Body { get; init; }
}
