using System;
using System.Text.Json.Serialization;
using Paid.Core.Models;
using Paid.Models.Enums;

namespace Paid.Models;

public record CreditCurrency
{
    /// <summary>
    /// Unique identifier for this credit currency.
    /// </summary>
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    /// <summary>
    /// Human-readable name shown for this credit currency.
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// Stable machine-readable key for this credit currency. Keys are unique within an organization.
    /// </summary>
    [JsonPropertyName("key")]
    public required string Key { get; init; }

    /// <summary>
    /// Whether this credit currency is active or archived.
    /// </summary>
    [JsonPropertyName("status")]
    public required CreditCurrencyStatus Status { get; init; }

    /// <summary>
    /// Optional description for this credit currency.
    /// </summary>
    [JsonPropertyName("description")]
    public required string? Description { get; init; }

    /// <summary>
    /// When this credit currency was archived. Null means the currency is active.
    /// </summary>
    [JsonPropertyName("archivedAt")]
    public required DateTimeOffset? ArchivedAt { get; init; }

    /// <summary>
    /// When this credit currency was created.
    /// </summary>
    [JsonPropertyName("createdAt")]
    public required DateTimeOffset CreatedAt { get; init; }

    /// <summary>
    /// When this credit currency was last updated.
    /// </summary>
    [JsonPropertyName("updatedAt")]
    public required DateTimeOffset UpdatedAt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
