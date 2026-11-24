using Instacart.Models;

namespace Instacart.Requests.Chat;

/// <summary>
/// The inputs of the SendChatMessage operation.
/// </summary>
public sealed record SendChatMessageRequest
{
    /// <summary>
    /// The unique identifier for the order in the chat context.
    /// </summary>
    public required string OrderId { get; init; }

    public required SendMessageRequest Body { get; init; }
}
