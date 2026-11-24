namespace AmazonAppSync.Requests.Channelnamespaces;

/// <summary>
/// The inputs of the DeleteChannelNamespace operation.
/// </summary>
public sealed record DeleteChannelNamespaceRequest
{
    /// <summary>
    /// The ID of the Api associated with the ChannelNamespace.
    /// </summary>
    public required string ApiId { get; init; }

    /// <summary>
    /// The name of the ChannelNamespace.
    /// </summary>
    public required string Name { get; init; }
}
