using System;
using System.Text.Json.Serialization;
using Deliverd.Core.Models;
using Deliverd.Models.Enums;

namespace Deliverd.Models;

public record Candidate
{
    [JsonPropertyName("type")]
    public required TypeDeliverdDevAudiencesApi Type { get; init; }

    [JsonPropertyName("id")]
    public required Guid? Id { get; init; }

    [JsonPropertyName("label")]
    public required string Label { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("detail")]
    public string? Detail { get; init; }

    [JsonPropertyName("score")]
    public required double Score { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
