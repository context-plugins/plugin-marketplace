using BundleSocial.Models;

namespace BundleSocial.Requests.ConversationApi;

/// <summary>
/// The inputs of the ConversationPrivateReply operation.
/// </summary>
public sealed record ConversationPrivateReplyRequest
{
    /// <summary>
    /// Body
    /// </summary>
    public ApiV1ConversationsPrivateReplyRequest? Body { get; init; }
}
