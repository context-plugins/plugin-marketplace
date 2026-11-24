using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record ModelsLexIntent
{
    /// <summary>
    /// The name of the intent.
    /// </summary>
    [JsonPropertyName("intentName")]
    public required string IntentName { get; init; }

    /// <summary>
    /// The version of the intent.
    /// </summary>
    [JsonPropertyName("intentVersion")]
    public required string IntentVersion { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
