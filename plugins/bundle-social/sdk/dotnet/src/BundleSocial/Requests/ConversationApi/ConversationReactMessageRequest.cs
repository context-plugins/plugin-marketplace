using BundleSocial.Models;

namespace BundleSocial.Requests.ConversationApi;

/// <summary>
/// The inputs of the ConversationReactMessage operation.
/// </summary>
public sealed record ConversationReactMessageRequest
{
    public required string Id { get; init; }

    public required string MessageId { get; init; }

    /// <summary>
    /// Body
    /// </summary>
    public ApiV1ConversationsMessagesReactionRequest? Body { get; init; }
}
