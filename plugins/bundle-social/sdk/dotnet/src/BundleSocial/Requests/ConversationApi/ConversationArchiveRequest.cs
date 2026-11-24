namespace BundleSocial.Requests.ConversationApi;

/// <summary>
/// The inputs of the ConversationArchive operation.
/// </summary>
public sealed record ConversationArchiveRequest
{
    public required string Id { get; init; }
}
