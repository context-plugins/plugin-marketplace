namespace DoiT.Requests.Ava;

/// <summary>
/// The inputs of the DeleteAvaConversation operation.
/// </summary>
public sealed record DeleteAvaConversationRequest
{
    /// <summary>
    /// The ID of the conversation to delete.
    /// </summary>
    public required string ConversationId { get; init; }
}
