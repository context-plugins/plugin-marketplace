using BundleSocial.Models;

namespace BundleSocial.Requests.Automation;

/// <summary>
/// The inputs of the AutomationSendRichMessage operation.
/// </summary>
public sealed record AutomationSendRichMessageRequest
{
    public required string ConversationId { get; init; }

    /// <summary>
    /// Body
    /// </summary>
    public ApiV1AutomationRichMessagesConversationsRequest? Body { get; init; }
}
