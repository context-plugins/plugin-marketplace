using System;
using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

/// <summary>
/// Projected layer metadata returned inside each layer entry.
/// Contains import state, last updated timestamp, and links version.
/// </summary>
public record CloudDiagramStatussheetMeta
{
    /// <summary>
    /// Layer ID.
    /// </summary>
    [JsonPropertyName("_id")]
    public required string Id { get; init; }

    /// <summary>
    /// Current import/sync state for a cloud-connected diagram.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("import")]
    public CloudDiagramImportState? Import { get; init; }

    /// <summary>
    /// Timestamp of the last update.
    /// </summary>
    [JsonPropertyName("updatedAt")]
    public required DateTimeOffset UpdatedAt { get; init; }

    /// <summary>
    /// Links version counter, incremented on every link change.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("linksVersion")]
    public int? LinksVersion { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
