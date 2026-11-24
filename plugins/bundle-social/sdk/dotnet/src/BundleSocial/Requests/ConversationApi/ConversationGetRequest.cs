namespace BundleSocial.Requests.ConversationApi;

/// <summary>
/// The inputs of the ConversationGet operation.
/// </summary>
public sealed record ConversationGetRequest
{
    public required string Id { get; init; }
}
