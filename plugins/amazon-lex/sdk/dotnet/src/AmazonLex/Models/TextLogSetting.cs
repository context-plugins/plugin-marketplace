using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record TextLogSetting
{
    /// <summary>
    /// Determines whether conversation logs should be stored for an alias.
    /// </summary>
    [JsonPropertyName("enabled")]
    public required bool Enabled { get; init; }

    [JsonPropertyName("destination")]
    public required TextLogDestination Destination { get; init; }

    /// <summary>
    /// The option to enable selective conversation log capture for text.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("selectiveLoggingEnabled")]
    public bool? SelectiveLoggingEnabled { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
