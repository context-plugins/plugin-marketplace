using BundleSocial.Models;

namespace BundleSocial.Requests.ConversationApi;

/// <summary>
/// The inputs of the ConversationMarkRead operation.
/// </summary>
public sealed record ConversationMarkReadRequest
{
    public required string Id { get; init; }

    /// <summary>
    /// Body
    /// </summary>
    public ApiV1ConversationsReadRequest? Body { get; init; }
}
