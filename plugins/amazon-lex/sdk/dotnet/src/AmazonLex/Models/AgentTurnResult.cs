using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record AgentTurnResult
{
    /// <summary>
    /// The expected agent prompt for the agent turn in a test set execution.
    /// </summary>
    [JsonPropertyName("expectedAgentPrompt")]
    public required string ExpectedAgentPrompt { get; init; }

    /// <summary>
    /// The actual agent prompt for the agent turn in a test set execution.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("actualAgentPrompt")]
    public string? ActualAgentPrompt { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("errorDetails")]
    public ExecutionErrorDetails? ErrorDetails { get; init; }

    /// <summary>
    /// The actual elicited slot for the agent turn in a test set execution.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("actualElicitedSlot")]
    public string? ActualElicitedSlot { get; init; }

    /// <summary>
    /// The actual intent for the agent turn in a test set execution.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("actualIntent")]
    public string? ActualIntent { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
