using System;
using System.Text.Json.Serialization;
using BrowserUse.Core.Models;

namespace BrowserUse.Models;

/// <summary>
/// A spendable project wallet as the composer needs to show it.
/// </summary>
public record AgentCardWalletSummary
{
    [JsonPropertyName("id")]
    public required Guid Id { get; init; }

    [JsonPropertyName("name")]
    public required string Name { get; init; }

    [JsonPropertyName("currency")]
    public required string Currency { get; init; }

    [JsonPropertyName("availableCents")]
    public required int AvailableCents { get; init; }

    [JsonPropertyName("activeHoldCents")]
    public required int ActiveHoldCents { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
