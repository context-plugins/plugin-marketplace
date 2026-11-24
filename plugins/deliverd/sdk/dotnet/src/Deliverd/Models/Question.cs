using System;
using System.Text.Json.Serialization;
using Deliverd.Core.Models;

namespace Deliverd.Models;

public record Question
{
    [JsonPropertyName("id")]
    public required Guid Id { get; init; }

    [JsonPropertyName("question")]
    public required string QuestionValue { get; init; }

    [JsonPropertyName("answer")]
    public required string? Answer { get; init; }

    [JsonPropertyName("askedAt")]
    public required string AskedAt { get; init; }

    [JsonPropertyName("answeredAt")]
    public required string? AnsweredAt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
