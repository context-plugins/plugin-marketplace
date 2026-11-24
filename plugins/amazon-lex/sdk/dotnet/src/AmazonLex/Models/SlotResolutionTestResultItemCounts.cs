using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record SlotResolutionTestResultItemCounts
{
    /// <summary>
    /// The total number of results.
    /// </summary>
    [JsonPropertyName("totalResultCount")]
    public required int TotalResultCount { get; init; }

    /// <summary>
    /// The number of matched, mismatched and execution error results for speech transcription for the slot.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("speechTranscriptionResultCounts")]
    public IReadOnlyDictionary<string, int>? SpeechTranscriptionResultCounts { get; init; }

    /// <summary>
    /// The number of matched and mismatched results for slot resolution for the slot.
    /// </summary>
    [JsonPropertyName("slotMatchResultCounts")]
    public required IReadOnlyDictionary<string, int> SlotMatchResultCounts { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
