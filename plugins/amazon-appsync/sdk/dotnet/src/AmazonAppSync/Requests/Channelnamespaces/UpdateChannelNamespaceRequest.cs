using AmazonAppSync.Models;

namespace AmazonAppSync.Requests.Channelnamespaces;

/// <summary>
/// The inputs of the UpdateChannelNamespace operation.
/// </summary>
public sealed record UpdateChannelNamespaceRequest
{
    /// <summary>
    /// The Api ID.
    /// </summary>
    public required string ApiId { get; init; }

    /// <summary>
    /// The name of the ChannelNamespace.
    /// </summary>
    public required string Name { get; init; }

    public V2ApisChannelNamespacesRequest1? Body { get; init; }
}
