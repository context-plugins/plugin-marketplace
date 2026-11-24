using System.Collections.Generic;
using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

/// <summary>
/// Full diagram export as a structured JSON document.
/// </summary>
public record CloudDiagramExportJsonResponse
{
    /// <summary>
    /// Diagram-level metadata (excluding internal IDs).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("statussheet")]
    public object? Statussheet { get; init; }

    /// <summary>
    /// Metadata included in a diagram JSON export.
    /// </summary>
    [JsonPropertyName("metadata")]
    public required CloudDiagramExportJsonMetadata Metadata { get; init; }

    /// <summary>
    /// Exported nodes.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nodes")]
    public IReadOnlyList<CloudDiagramNode>? Nodes { get; init; }

    /// <summary>
    /// Exported elements.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("elements")]
    public IReadOnlyList<CloudDiagramElement>? Elements { get; init; }

    /// <summary>
    /// Exported groups.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("groups")]
    public IReadOnlyList<CloudDiagramGroup>? Groups { get; init; }

    /// <summary>
    /// Exported attachments.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("attachments")]
    public IReadOnlyList<CloudDiagramAttachment>? Attachments { get; init; }

    /// <summary>
    /// Exported links.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("links")]
    public IReadOnlyList<CloudDiagramLink>? Links { get; init; }

    /// <summary>
    /// Exported combiners.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("combiners")]
    public IReadOnlyList<CloudDiagramCombiner>? Combiners { get; init; }

    /// <summary>
    /// Exported notes.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("notes")]
    public IReadOnlyList<CloudDiagramNote>? Notes { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
