using System;
using System.Text.Json.Serialization;
using AlphAi.Core.Models;
using AlphAi.Models.Enums;

namespace AlphAi.Models;

/// <summary>
/// Pointer to a ticker's most recent earnings read (for the article link).
/// </summary>
public record LatestEarningsPointer
{
    /// <summary>
    /// Article uid; resolve the full read via /api/news/{uid}/.
    /// </summary>
    [JsonPropertyName("uid")]
    public required string Uid { get; init; }

    [JsonPropertyName("time_published")]
    public required DateTimeOffset TimePublished { get; init; }

    [JsonPropertyName("title")]
    public required string Title { get; init; }

    [JsonPropertyName("fiscal_period")]
    public required string FiscalPeriod { get; init; }

    [JsonPropertyName("verdict")]
    public required Verdict Verdict { get; init; }

    [JsonPropertyName("headline")]
    public required string Headline { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
