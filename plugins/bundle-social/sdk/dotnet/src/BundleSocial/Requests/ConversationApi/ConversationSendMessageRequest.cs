using BundleSocial.Models;

namespace BundleSocial.Requests.ConversationApi;

/// <summary>
/// The inputs of the ConversationSendMessage operation.
/// </summary>
public sealed record ConversationSendMessageRequest
{
    public required string Id { get; init; }

    /// <summary>
    /// Body
    /// </summary>
    public ApiV1ConversationsMessagesRequest? Body { get; init; }
}
