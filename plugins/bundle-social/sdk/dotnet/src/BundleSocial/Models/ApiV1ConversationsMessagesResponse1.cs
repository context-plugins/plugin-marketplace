using System.Text.Json.Serialization;
using BundleSocial.Core.Models;

namespace BundleSocial.Models;

public record ApiV1ConversationsMessagesResponse1
{
    [JsonPropertyName("conversation")]
    public required ConversationBundleSocialConversationApi Conversation { get; init; }

    [JsonPropertyName("message")]
    public required MessageBundleSocialConversationApi Message { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("conflict")]
    public bool? Conflict { get; init; } = false;

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
