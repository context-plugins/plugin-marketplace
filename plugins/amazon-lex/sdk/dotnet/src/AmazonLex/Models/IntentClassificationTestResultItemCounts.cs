using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record IntentClassificationTestResultItemCounts
{
    /// <summary>
    /// The total number of results in the intent classification test.
    /// </summary>
    [JsonPropertyName("totalResultCount")]
    public required int TotalResultCount { get; init; }

    /// <summary>
    /// The number of matched, mismatched, and execution error results for speech transcription for the intent.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("speechTranscriptionResultCounts")]
    public IReadOnlyDictionary<string, int>? SpeechTranscriptionResultCounts { get; init; }

    /// <summary>
    /// The number of matched and mismatched results for intent recognition for the intent.
    /// </summary>
    [JsonPropertyName("intentMatchResultCounts")]
    public required IReadOnlyDictionary<string, int> IntentMatchResultCounts { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
