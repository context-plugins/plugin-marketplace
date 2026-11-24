namespace BundleSocial.Requests.ConversationApi;

/// <summary>
/// The inputs of the ConversationOpen operation.
/// </summary>
public sealed record ConversationOpenRequest
{
    public required string Id { get; init; }
}
