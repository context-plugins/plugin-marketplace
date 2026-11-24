using System;
using System.Text.Json.Serialization;
using Paid.Core.Models;

namespace Paid.Models;

public record ValueModelDetail
{
    /// <summary>
    /// Value model version ID.
    /// </summary>
    [JsonPropertyName("id")]
    public required Guid Id { get; init; }

    /// <summary>
    /// Monotonically increasing version number.
    /// </summary>
    [JsonPropertyName("version")]
    public required int Version { get; init; }

    /// <summary>
    /// Full value model configuration: value types, formulas, signals, and overrides.
    /// </summary>
    [JsonPropertyName("content")]
    public required ValueModelContent Content { get; init; }

    [JsonPropertyName("createdAt")]
    public required DateTimeOffset CreatedAt { get; init; }

    [JsonPropertyName("activatedAt")]
    public required DateTimeOffset? ActivatedAt { get; init; }

    [JsonPropertyName("effectiveFrom")]
    public required DateTimeOffset? EffectiveFrom { get; init; }

    [JsonPropertyName("effectiveTo")]
    public required DateTimeOffset? EffectiveTo { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
