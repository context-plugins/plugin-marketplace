using System;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Models;
using ParallelSdk.Models.Enums;

namespace ParallelSdk.Models;

public record TaskMemoryResult
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("kind")]
    public Kind1? Kind { get; init; } = Kind1.Task;

    /// <summary>
    /// ID of the task run.
    /// </summary>
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    /// <summary>
    /// When the run completed, as an RFC 3339 timestamp.
    /// </summary>
    [JsonPropertyName("updated_at")]
    public required DateTimeOffset UpdatedAt { get; init; }

    /// <summary>
    /// Preview of the run's input. May be truncated.
    /// </summary>
    [JsonPropertyName("input_excerpt")]
    public required string InputExcerpt { get; init; }

    /// <summary>
    /// Preview of the run's output. May be truncated.
    /// </summary>
    [JsonPropertyName("output_excerpt")]
    public required string OutputExcerpt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
