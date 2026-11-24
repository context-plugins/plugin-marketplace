using System.Text.Json.Serialization;
using AmazonLex.Core.Models;
using AmazonLex.Models.Enums;

namespace AmazonLex.Models;

public record AnalyticsSessionGroupBySpecification
{
    /// <summary>
    /// Specifies whether to group the session by their end state or their locale.
    /// </summary>
    [JsonPropertyName("name")]
    public required Name15 Name { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
