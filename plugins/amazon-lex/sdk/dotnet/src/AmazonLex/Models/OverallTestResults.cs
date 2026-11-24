using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record OverallTestResults
{
    /// <summary>
    /// A list of the overall test results.
    /// </summary>
    [JsonPropertyName("items")]
    public required IReadOnlyList<OverallTestResultItem> Items { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
