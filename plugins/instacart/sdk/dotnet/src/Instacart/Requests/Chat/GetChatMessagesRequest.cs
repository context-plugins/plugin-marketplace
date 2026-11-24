namespace Instacart.Requests.Chat;

/// <summary>
/// The inputs of the GetChatMessages operation.
/// </summary>
public sealed record GetChatMessagesRequest
{
    /// <summary>
    /// The unique identifier for the order in the chat context.
    /// </summary>
    public required string OrderId { get; init; }
}
