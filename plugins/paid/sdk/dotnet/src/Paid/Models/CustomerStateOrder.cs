using System;
using System.Text.Json.Serialization;
using Paid.Core.Models;
using Paid.Models.Enums;

namespace Paid.Models;

public record CustomerStateOrder
{
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    [JsonPropertyName("externalId")]
    public required string? ExternalId { get; init; }

    [JsonPropertyName("name")]
    public required string Name { get; init; }

    [JsonPropertyName("state")]
    public required CustomerStateOrderState State { get; init; }

    /// <summary>
    /// ISO 4217 currency code, for example USD, EUR, or GBP.
    /// </summary>
    [JsonPropertyName("currency")]
    public required string Currency { get; init; }

    [JsonPropertyName("startDate")]
    public required DateTimeOffset StartDate { get; init; }

    [JsonPropertyName("endDate")]
    public required DateTimeOffset? EndDate { get; init; }

    /// <summary>
    /// When the order stops applying; null means no scheduled end.
    /// </summary>
    [JsonPropertyName("effectiveUntil")]
    public required DateTimeOffset? EffectiveUntil { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
