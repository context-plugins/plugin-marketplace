using System.Collections.Generic;
using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

/// <summary>
/// Component collections of a diagram layer, keyed by component ID.
/// </summary>
public record CloudDiagramStatussheetComponents
{
    /// <summary>
    /// Map of node ID to node component.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("node")]
    public IReadOnlyDictionary<string, CloudDiagramNode>? Node { get; init; }

    /// <summary>
    /// Map of element ID to element component.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("element")]
    public IReadOnlyDictionary<string, CloudDiagramElement>? Element { get; init; }

    /// <summary>
    /// Map of group ID to group component.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("group")]
    public IReadOnlyDictionary<string, CloudDiagramGroup>? Group { get; init; }

    /// <summary>
    /// Map of link ID to link component.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("link")]
    public IReadOnlyDictionary<string, CloudDiagramLink>? Link { get; init; }

    /// <summary>
    /// Map of attachment ID to attachment component.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("attachment")]
    public IReadOnlyDictionary<string, CloudDiagramAttachment>? Attachment { get; init; }

    /// <summary>
    /// Map of combiner ID to combiner component.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("combiner")]
    public IReadOnlyDictionary<string, CloudDiagramCombiner>? Combiner { get; init; }

    /// <summary>
    /// Map of note ID to note component.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("note")]
    public IReadOnlyDictionary<string, CloudDiagramNote>? Note { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
