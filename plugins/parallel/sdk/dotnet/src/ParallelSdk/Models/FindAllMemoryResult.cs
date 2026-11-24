using System;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Models;
using ParallelSdk.Models.Enums;

namespace ParallelSdk.Models;

public record FindAllMemoryResult
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("kind")]
    public Kind4? Kind { get; init; } = Kind4.Findall;

    /// <summary>
    /// ID of the FindAll run.
    /// </summary>
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    /// <summary>
    /// When the FindAll result was last updated, as an RFC 3339 timestamp.
    /// </summary>
    [JsonPropertyName("updated_at")]
    public required DateTimeOffset UpdatedAt { get; init; }

    /// <summary>
    /// Preview of the run's objective. May be truncated.
    /// </summary>
    [JsonPropertyName("input_excerpt")]
    public required string InputExcerpt { get; init; }

    /// <summary>
    /// Current number of matched entities.
    /// </summary>
    [JsonPropertyName("matched_count")]
    public required int MatchedCount { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
