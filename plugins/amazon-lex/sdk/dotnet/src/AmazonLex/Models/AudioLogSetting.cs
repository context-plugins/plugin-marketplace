using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record AudioLogSetting
{
    /// <summary>
    /// Determines whether audio logging in enabled for the bot.
    /// </summary>
    [JsonPropertyName("enabled")]
    public required bool Enabled { get; init; }

    [JsonPropertyName("destination")]
    public required AudioLogDestination Destination { get; init; }

    /// <summary>
    /// The option to enable selective conversation log capture for audio.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("selectiveLoggingEnabled")]
    public bool? SelectiveLoggingEnabled { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
