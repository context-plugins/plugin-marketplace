using System.Collections.Generic;
using System.Text.Json.Serialization;
using AgentReady.Core.Models;

namespace AgentReady.Models;

/// <summary>
/// Paginated list of scans owned by the API key.
/// </summary>
public record ScanListResponse
{
    [JsonPropertyName("data")]
    public required IReadOnlyList<ScanSummary> Data { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nextCursor")]
    public string? NextCursor { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
