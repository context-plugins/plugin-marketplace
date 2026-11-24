using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using CompSniper.Core.Models;

namespace CompSniper.Models;

public record BulkSearchRequest
{
    /// <summary>
    /// Case-insensitively deduplicated product keywords. Each keyword may contain at most 300 characters.
    /// </summary>
    [JsonPropertyName("keywords")]
    [MinLength(1)]
    [MaxLength(20)]
    public required IReadOnlyList<string> Keywords { get; init; }

    /// <summary>
    /// Shared page-one options applied independently to every keyword.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("options")]
    public BulkSearchOptions? Options { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
