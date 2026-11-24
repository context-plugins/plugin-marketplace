using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record ConversationLevelTestResults
{
    /// <summary>
    /// The item list in the test set results data at the conversation level.
    /// </summary>
    [JsonPropertyName("items")]
    public required IReadOnlyList<ConversationLevelTestResultItem> Items { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
