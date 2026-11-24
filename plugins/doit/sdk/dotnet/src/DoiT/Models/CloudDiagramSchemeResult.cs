using System.Collections.Generic;
using System.Text.Json.Serialization;
using DoiT.Core.Models;
using DoiT.Models.Enums;

namespace DoiT.Models;

/// <summary>
/// A diagram with its connected cloud accounts.
/// </summary>
public record CloudDiagramSchemeResult
{
    /// <summary>
    /// Diagram ID.
    /// </summary>
    [JsonPropertyName("_id")]
    public required string Id { get; init; }

    /// <summary>
    /// Diagram name.
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// Diagram color.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("color")]
    public string? Color { get; init; }

    /// <summary>
    /// Diagram type.
    /// </summary>
    [JsonPropertyName("type")]
    public required Type9 Type { get; init; }

    /// <summary>
    /// Connected cloud accounts (layers).
    /// </summary>
    [JsonPropertyName("statussheet")]
    public required IReadOnlyList<CloudDiagramSchemeStatussheetInfo> Statussheet { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
