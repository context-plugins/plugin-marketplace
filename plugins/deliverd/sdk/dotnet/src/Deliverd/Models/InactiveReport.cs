using System;
using System.Text.Json.Serialization;
using Deliverd.Core.Models;

namespace Deliverd.Models;

public record InactiveReport
{
    [JsonPropertyName("reportId")]
    public required Guid ReportId { get; init; }

    [JsonPropertyName("title")]
    public required string Title { get; init; }

    [JsonPropertyName("lastViewedAt")]
    public required string? LastViewedAt { get; init; }

    [JsonPropertyName("publishedAt")]
    public required string? PublishedAt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
