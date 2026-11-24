using System.Collections.Generic;
using System.Text.Json.Serialization;
using DoiT.Core.Models;
using DoiT.Models.AnyOf;

namespace DoiT.Models;

/// <summary>
/// Request body for getting diagram components.
/// Leave empty to retrieve all accessible diagrams (returns scheme map only).
/// </summary>
public record CloudDiagramsGetRequest
{
    /// <summary>
    /// IDs of diagrams to load.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("scheme")]
    public IReadOnlyList<string>? Scheme { get; init; }

    /// <summary>
    /// IDs of layers to load.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("statussheet")]
    public IReadOnlyList<string>? Statussheet { get; init; }

    /// <summary>
    /// Template type or array of template layer IDs to include.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("template")]
    public Template1? Template { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
