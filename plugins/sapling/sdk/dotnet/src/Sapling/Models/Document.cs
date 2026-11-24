using System.Text.Json.Serialization;
using Sapling.Core.Models;

namespace Sapling.Models;

public record Document
{
    /// <summary>
    /// Characters of text extracted from the file.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("characters")]
    public int? Characters { get; init; }

    /// <summary>
    /// Characters read for extraction (and billed).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("characters_used")]
    public int? CharactersUsed { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("file_type")]
    public string? FileType { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("truncated")]
    public bool? Truncated { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
