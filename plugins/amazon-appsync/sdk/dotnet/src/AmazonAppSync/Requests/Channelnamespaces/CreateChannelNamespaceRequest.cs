using AmazonAppSync.Models;

namespace AmazonAppSync.Requests.Channelnamespaces;

/// <summary>
/// The inputs of the CreateChannelNamespace operation.
/// </summary>
public sealed record CreateChannelNamespaceRequest
{
    /// <summary>
    /// The Api ID.
    /// </summary>
    public required string ApiId { get; init; }

    public V2ApisChannelNamespacesRequest? Body { get; init; }
}
