using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record ConversationLogSettings
{
    /// <summary>
    /// The Amazon CloudWatch Logs settings for logging text and metadata.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("textLogSettings")]
    public IReadOnlyList<TextLogSetting>? TextLogSettings { get; init; }

    /// <summary>
    /// The Amazon S3 settings for logging audio to an S3 bucket.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("audioLogSettings")]
    public IReadOnlyList<AudioLogSetting>? AudioLogSettings { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
