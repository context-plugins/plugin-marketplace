namespace AmazonAppSync.Requests.Channelnamespaces;

/// <summary>
/// The inputs of the GetChannelNamespace operation.
/// </summary>
public sealed record GetChannelNamespaceRequest
{
    /// <summary>
    /// The Api ID.
    /// </summary>
    public required string ApiId { get; init; }

    /// <summary>
    /// The name of the ChannelNamespace.
    /// </summary>
    public required string Name { get; init; }
}
