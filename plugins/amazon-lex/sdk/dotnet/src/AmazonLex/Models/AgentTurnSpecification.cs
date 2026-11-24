using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record AgentTurnSpecification
{
    /// <summary>
    /// The agent prompt for the agent turn in a test set.
    /// </summary>
    [JsonPropertyName("agentPrompt")]
    public required string AgentPrompt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
