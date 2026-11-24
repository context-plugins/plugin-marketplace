using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record ModelsLexDeleteBotRequest
{
    /// <summary>
    /// The name of the bot. The name is case sensitive.
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
