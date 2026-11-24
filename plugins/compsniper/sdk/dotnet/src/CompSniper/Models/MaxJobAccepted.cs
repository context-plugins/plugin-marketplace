using System;
using System.Text.Json.Serialization;
using CompSniper.Core.Models;
using CompSniper.Models.Enums;

namespace CompSniper.Models;

public record MaxJobAccepted
{
    [JsonPropertyName("jobId")]
    public required Guid JobId { get; init; }

    [JsonPropertyName("status")]
    public required string Status { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("keyword")]
    public string? Keyword { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("maxPages")]
    public int? MaxPages { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("delivery")]
    public Delivery? Delivery { get; init; }

    [JsonPropertyName("resultsUrl")]
    public required string ResultsUrl { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
