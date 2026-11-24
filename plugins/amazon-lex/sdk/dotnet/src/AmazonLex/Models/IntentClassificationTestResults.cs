using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record IntentClassificationTestResults
{
    /// <summary>
    /// A list of the results for the intent classification test.
    /// </summary>
    [JsonPropertyName("items")]
    public required IReadOnlyList<IntentClassificationTestResultItem> Items { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
