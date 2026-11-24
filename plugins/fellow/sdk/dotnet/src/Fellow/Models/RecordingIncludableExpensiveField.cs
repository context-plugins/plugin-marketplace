using System.Text.Json.Serialization;
using Fellow.Core.Models;

namespace Fellow.Models;

public record RecordingIncludableExpensiveField
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("transcript")]
    public bool? Transcript { get; init; } = false;

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ai_notes")]
    public bool? AiNotes { get; init; } = false;

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
