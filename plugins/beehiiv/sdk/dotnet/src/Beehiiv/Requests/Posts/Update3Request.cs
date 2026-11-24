using Beehiiv.Models;

namespace Beehiiv.Requests.Posts;

/// <summary>
/// The inputs of the Update3 operation.
/// </summary>
public sealed record Update3Request
{
    /// <summary>
    /// The prefixed ID of the publication object
    /// </summary>
    public required string PublicationId { get; init; }

    /// <summary>
    /// The prefixed ID of the post to update
    /// </summary>
    public required string PostId { get; init; }

    /// <summary>
    /// Bearer authentication
    /// </summary>
    public required string Authorization { get; init; }

    public PublicationsPostsRequest1? Body { get; init; }
}
