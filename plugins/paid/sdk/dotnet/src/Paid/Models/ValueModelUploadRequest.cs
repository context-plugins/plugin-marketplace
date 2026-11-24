using System;
using System.Text.Json.Serialization;
using Paid.Core.Models;

namespace Paid.Models;

public record ValueModelUploadRequest
{
    /// <summary>
    /// Full value model configuration: value types, formulas, signals, and overrides.
    /// </summary>
    [JsonPropertyName("content")]
    public required ValueModelContent Content { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("effectiveFrom")]
    public DateTimeOffset? EffectiveFrom { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("effectiveTo")]
    public DateTimeOffset? EffectiveTo { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
