using System.Collections.Generic;
using System.Text.Json.Serialization;
using Basiq.Core.Models;

namespace Basiq.Models;

/// <summary>
/// Response envelope for GET /insights/types. Contains a list of all supported Insight types and their Insight-specific input schemas.
/// </summary>
public record InsightTypesList
{
    /// <summary>
    /// Resource type identifier, always <c>list</c>.
    /// </summary>
    [JsonPropertyName("type")]
    public string Type { get; } = "list";

    /// <summary>
    /// Total number of Insight types returned.
    /// </summary>
    [JsonPropertyName("count")]
    public required int Count { get; init; }

    /// <summary>
    /// Array of Insight type objects.
    /// </summary>
    [JsonPropertyName("data")]
    public required IReadOnlyList<InsightTypeItem> Data { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
