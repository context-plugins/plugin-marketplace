using System.Collections.Generic;
using System.Text.Json.Serialization;
using Paid.Core.Models;

namespace Paid.Models;

public record SignalsMetadataResponseSignalsItemsPathsItems
{
    /// <summary>
    /// JSON path inside the signal <c>data</c> payload, usable in queries as e.g. <c>data.&lt;path&gt;::String</c>.
    /// </summary>
    [JsonPropertyName("path")]
    public required string Path { get; init; }

    /// <summary>
    /// ClickHouse dynamic types observed for this path.
    /// </summary>
    [JsonPropertyName("types")]
    public required IReadOnlyList<string> Types { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
