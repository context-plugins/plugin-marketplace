using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Ortto.Core.Models;
using Ortto.Models.Enums;

namespace Ortto.Models;

public record PersonMergeRequest
{
    [JsonPropertyName("people")]
    [MaxLength(100)]
    public required IReadOnlyList<PersonInput> People { get; init; }

    /// <summary>
    /// Up to 3 field IDs used to identify existing records.
    /// </summary>
    [JsonPropertyName("merge_by")]
    [MaxLength(3)]
    public required IReadOnlyList<string> MergeBy { get; init; }

    /// <summary>
    /// 1 = append only, 2 = overwrite existing, 3 = ignore.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("merge_strategy")]
    public MergeStrategy? MergeStrategy { get; init; }

    /// <summary>
    /// 0 = any, 1 = sequential, 2 = all.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("find_strategy")]
    public FindStrategy? FindStrategy { get; init; }

    /// <summary>
    /// Queue processing when true; recommended for large batches.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("async")]
    public bool? Async { get; init; }

    /// <summary>
    /// When true, only updates existing records.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("skip_non_existing")]
    public bool? SkipNonExisting { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("suppression_list_field_id")]
    public string? SuppressionListFieldId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
