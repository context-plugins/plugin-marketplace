using System.Text.Json.Serialization;
using AmazonLex.Core.Models;
using AmazonLex.Models.Enums;

namespace AmazonLex.Models;

public record AnalyticsIntentGroupBySpecification
{
    /// <summary>
    /// Specifies whether to group the intent stages by their name or their end state.
    /// </summary>
    [JsonPropertyName("name")]
    public required Name4 Name { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
