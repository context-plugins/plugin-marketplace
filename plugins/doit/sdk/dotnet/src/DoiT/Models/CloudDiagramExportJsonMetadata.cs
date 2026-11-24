using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

/// <summary>
/// Metadata included in a diagram JSON export.
/// </summary>
public record CloudDiagramExportJsonMetadata
{
    /// <summary>
    /// Email of the user who triggered the export.
    /// </summary>
    [JsonPropertyName("user")]
    public required string User { get; init; }

    /// <summary>
    /// ISO 8601 timestamp of the export.
    /// </summary>
    [JsonPropertyName("date")]
    public required DateTimeOffset Date { get; init; }

    /// <summary>
    /// Export format version.
    /// </summary>
    [JsonPropertyName("version")]
    public required string Version { get; init; }

    /// <summary>
    /// Map of component ID to display label for external connections referenced by cross-diagram links.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("connections")]
    public IReadOnlyDictionary<string, string>? Connections { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
