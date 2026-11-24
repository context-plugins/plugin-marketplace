using System.Text.Json.Serialization;
using Apibara.Core.Models;

namespace Apibara.Models;

public record Meta1
{
    [JsonPropertyName("schema_version")]
    public required string SchemaVersion { get; init; }

    [JsonPropertyName("after")]
    public required long After { get; init; }

    [JsonPropertyName("next_cursor")]
    public required long NextCursor { get; init; }

    [JsonPropertyName("has_more")]
    public required bool HasMore { get; init; }

    [JsonPropertyName("count")]
    public required int Count { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("oldest_available_sequence")]
    public long? OldestAvailableSequence { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("latest_available_sequence")]
    public long? LatestAvailableSequence { get; init; }

    [JsonPropertyName("retention_days")]
    public required int RetentionDays { get; init; }

    [JsonPropertyName("ordering")]
    public string Ordering { get; } = "sequence_asc";

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
