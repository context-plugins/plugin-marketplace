using BundleSocial.Models;

namespace BundleSocial.Requests.ConversationApi;

/// <summary>
/// The inputs of the ConversationUpdate operation.
/// </summary>
public sealed record ConversationUpdateRequest
{
    public required string Id { get; init; }

    /// <summary>
    /// Body
    /// </summary>
    public ApiV1ConversationsRequest? Body { get; init; }
}
