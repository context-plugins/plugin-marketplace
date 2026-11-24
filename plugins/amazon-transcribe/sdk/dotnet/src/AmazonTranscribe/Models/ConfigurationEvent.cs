using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Models;

namespace AmazonTranscribe.Models;

public record ConfigurationEvent
{
    /// <summary>
    /// Indicates which speaker is on which audio channel.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ChannelDefinitions")]
    public IReadOnlyList<TranscribestreamingChannelDefinition>? ChannelDefinitions { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("PostCallAnalyticsSettings")]
    public PostCallAnalyticsSettings? PostCallAnalyticsSettings { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
