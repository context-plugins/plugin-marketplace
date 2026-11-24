using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record OverallTestResultItem
{
    /// <summary>
    /// Indicates whether the conversation contains multiple turns or not.
    /// </summary>
    [JsonPropertyName("multiTurnConversation")]
    public required bool MultiTurnConversation { get; init; }

    /// <summary>
    /// The total number of overall results in the result of the test execution.
    /// </summary>
    [JsonPropertyName("totalResultCount")]
    public required int TotalResultCount { get; init; }

    /// <summary>
    /// The number of speech transcription results in the overall test.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("speechTranscriptionResultCounts")]
    public IReadOnlyDictionary<string, int>? SpeechTranscriptionResultCounts { get; init; }

    /// <summary>
    /// The number of results that succeeded.
    /// </summary>
    [JsonPropertyName("endToEndResultCounts")]
    public required IReadOnlyDictionary<string, int> EndToEndResultCounts { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
