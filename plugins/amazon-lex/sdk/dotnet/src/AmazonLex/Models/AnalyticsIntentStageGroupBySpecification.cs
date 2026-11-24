using System.Text.Json.Serialization;
using AmazonLex.Core.Models;
using AmazonLex.Models.Enums;

namespace AmazonLex.Models;

public record AnalyticsIntentStageGroupBySpecification
{
    /// <summary>
    /// Specifies whether to group the intent stages by their name or the intent to which the session was switched.
    /// </summary>
    [JsonPropertyName("name")]
    public required Name9 Name { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
