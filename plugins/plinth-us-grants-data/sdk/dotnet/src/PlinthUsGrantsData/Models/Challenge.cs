using System.Collections.Generic;
using System.Text.Json.Serialization;
using PlinthUsGrantsData.Core.Models;

namespace PlinthUsGrantsData.Models;

/// <summary>
/// Present when the key arrives LOCKED. Until these are answered the key may make only the calls named here.
/// </summary>
public record Challenge
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("questions")]
    public IReadOnlyList<ChallengeQuestion>? Questions { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("answer_at")]
    public string? AnswerAt { get; init; }

    /// <summary>
    /// How many answers this challenge takes and how they are spaced. Running out draws a FRESH challenge rather than locking the key.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("attempts")]
    public string? Attempts { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
