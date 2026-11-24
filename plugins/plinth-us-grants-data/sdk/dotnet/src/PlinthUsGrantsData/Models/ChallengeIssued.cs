using System.Collections.Generic;
using System.Text.Json.Serialization;
using PlinthUsGrantsData.Core.Models;

namespace PlinthUsGrantsData.Models;

public record ChallengeIssued
{
    [JsonPropertyName("code")]
    public required int Code { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("message")]
    public string? Message { get; init; }

    [JsonPropertyName("questions")]
    public required IReadOnlyList<ChallengeQuestion> Questions { get; init; }

    [JsonPropertyName("answer_at")]
    public required string AnswerAt { get; init; }

    /// <summary>
    /// How many answers this challenge takes and how they are spaced. Running out draws a FRESH challenge rather than locking the key.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("attempts")]
    public string? Attempts { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
