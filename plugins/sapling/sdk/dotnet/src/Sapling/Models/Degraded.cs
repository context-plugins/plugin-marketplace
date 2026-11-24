using System.Text.Json.Serialization;
using Sapling.Core.Models;
using Sapling.Core.Validation.Attributes;
using Sapling.Models.Enums;

namespace Sapling.Models;

/// <summary>
/// Present only on a partial result: a model stage could not process some sentences in time, so those sentences may be missing some or all of their corrections (a failed primary stage leaves a sentence unchecked; a failed secondary stage, e.g. neural spellcheck or postprocessing, drops only that stage's corrections). Every edit returned is still valid. Absent from a fully successful response. Retry the request (after a short backoff) for a complete result.
/// </summary>
public record Degraded
{
    [JsonPropertyName("reason")]
    public required Reason Reason { get; init; }

    [JsonPropertyName("sentences_degraded")]
    [Minimum(1)]
    public required int SentencesDegraded { get; init; }

    [JsonPropertyName("sentences_total")]
    [Minimum(1)]
    public required int SentencesTotal { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
