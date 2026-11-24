using Beehiiv.Models;

namespace Beehiiv.Requests.Posts;

/// <summary>
/// The inputs of the TestSend operation.
/// </summary>
public sealed record TestSendRequest
{
    /// <summary>
    /// The prefixed ID of the publication object
    /// </summary>
    public required string PublicationId { get; init; }

    /// <summary>
    /// The prefixed ID of the post object
    /// </summary>
    public required string PostId { get; init; }

    /// <summary>
    /// Bearer authentication
    /// </summary>
    public required string Authorization { get; init; }

    public PublicationsPostsTestSendsRequest? Body { get; init; }
}
