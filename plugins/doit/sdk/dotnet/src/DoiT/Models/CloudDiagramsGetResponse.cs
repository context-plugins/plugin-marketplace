using System.Collections.Generic;
using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

/// <summary>
/// Diagram and layer data.
/// When called with an empty body, only the diagram map is populated.
/// When called with a populated body, both diagram and layer maps are returned
/// with components projected to key display and cloud fields by default.
/// </summary>
public record CloudDiagramsGetResponse
{
    /// <summary>
    /// Map of diagram ID to diagram with its connected cloud accounts.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("scheme")]
    public IReadOnlyDictionary<string, CloudDiagramSchemeResult>? Scheme { get; init; }

    /// <summary>
    /// Map of layer ID to layer metadata and component collections.
    /// Components are projected to key display and cloud fields by default.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("statussheet")]
    public IReadOnlyDictionary<string, CloudDiagramStatussheetData>? Statussheet { get; init; }

    /// <summary>
    /// Map of template layer ID to template data.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("template")]
    public object? Template { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
