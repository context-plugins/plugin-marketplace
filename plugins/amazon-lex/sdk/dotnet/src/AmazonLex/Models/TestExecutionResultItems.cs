using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record TestExecutionResultItems
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("overallTestResults")]
    public OverallTestResults? OverallTestResults { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("conversationLevelTestResults")]
    public ConversationLevelTestResults? ConversationLevelTestResults { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("intentClassificationTestResults")]
    public IntentClassificationTestResults? IntentClassificationTestResults { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("intentLevelSlotResolutionTestResults")]
    public IntentLevelSlotResolutionTestResults? IntentLevelSlotResolutionTestResults { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("utteranceLevelTestResults")]
    public UtteranceLevelTestResults? UtteranceLevelTestResults { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
