using System.Text.Json.Serialization;
using AmazonLex.Core.Models;
using AmazonLex.Models.Enums;

namespace AmazonLex.Models;

public record TestExecutionResultFilterBy
{
    /// <summary>
    /// Specifies which results to filter. See Test result details"&gt;Test results details for details about different types of results.
    /// </summary>
    [JsonPropertyName("resultTypeFilter")]
    public required ResultTypeFilter ResultTypeFilter { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("conversationLevelTestResultsFilterBy")]
    public ConversationLevelTestResultsFilterBy? ConversationLevelTestResultsFilterBy { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
