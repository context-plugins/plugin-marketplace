using System.Text.Json.Serialization;
using AmazonLex.Core.Models;
using AmazonLex.Models.Enums;

namespace AmazonLex.Models;

public record ConversationLevelTestResultsFilterBy
{
    /// <summary>
    /// The selection of matched or mismatched end-to-end status to filter test set results data at the conversation level.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("endToEndResult")]
    public EndToEndResult2? EndToEndResult { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
