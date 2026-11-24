using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record UtteranceLevelTestResults
{
    /// <summary>
    /// Contains information about an utterance in the results of the test set execution.
    /// </summary>
    [JsonPropertyName("items")]
    public required IReadOnlyList<UtteranceLevelTestResultItem> Items { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
