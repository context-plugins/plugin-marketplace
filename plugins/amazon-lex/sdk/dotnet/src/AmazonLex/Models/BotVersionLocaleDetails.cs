using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record BotVersionLocaleDetails
{
    /// <summary>
    /// The version of a bot used for a bot locale.
    /// </summary>
    [JsonPropertyName("sourceBotVersion")]
    public required string SourceBotVersion { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
