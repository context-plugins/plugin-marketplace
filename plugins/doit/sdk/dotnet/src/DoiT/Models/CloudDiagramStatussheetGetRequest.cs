using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

/// <summary>
/// Request body for getting layer components. At least one component type must be
/// provided with one or more IDs.
/// </summary>
public record CloudDiagramStatussheetGetRequest
{
    /// <summary>
    /// Node IDs to fetch.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("node")]
    [MinLength(1)]
    public IReadOnlyList<string>? Node { get; init; }

    /// <summary>
    /// Element IDs to fetch.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("element")]
    [MinLength(1)]
    public IReadOnlyList<string>? Element { get; init; }

    /// <summary>
    /// Link IDs to fetch.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("link")]
    [MinLength(1)]
    public IReadOnlyList<string>? Link { get; init; }

    /// <summary>
    /// Group IDs to fetch.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("group")]
    [MinLength(1)]
    public IReadOnlyList<string>? Group { get; init; }

    /// <summary>
    /// Attachment IDs to fetch.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("attachment")]
    [MinLength(1)]
    public IReadOnlyList<string>? Attachment { get; init; }

    /// <summary>
    /// Note IDs to fetch.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("note")]
    [MinLength(1)]
    public IReadOnlyList<string>? Note { get; init; }

    /// <summary>
    /// Combiner IDs to fetch.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("combiner")]
    [MinLength(1)]
    public IReadOnlyList<string>? Combiner { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
