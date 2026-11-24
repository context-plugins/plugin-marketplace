using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record QInConnectAssistantConfiguration
{
    /// <summary>
    /// The assistant Arn details of the Qinconnect assistant configuration.
    /// </summary>
    [JsonPropertyName("assistantArn")]
    public required string AssistantArn { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
