using System.Text.Json.Serialization;
using AmazonLex.Core.Models;
using AmazonLex.Models.Enums;

namespace AmazonLex.Models;

public record AnalyticsUtteranceGroupBySpecification
{
    /// <summary>
    /// Specifies whether to group the utterances by their text or their state.
    /// </summary>
    [JsonPropertyName("name")]
    public required Name20 Name { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
