using System.Collections.Generic;
using System.Text.Json.Serialization;
using Statable.Core.Models;

namespace Statable.Models;

public record TrackingFeatureState
{
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    [JsonPropertyName("label")]
    public required string Label { get; init; }

    [JsonPropertyName("enabled")]
    public required bool Enabled { get; init; }

    /// <summary>
    /// Always collected; cannot be turned off.
    /// </summary>
    [JsonPropertyName("locked")]
    public required bool Locked { get; init; }

    [JsonPropertyName("default")]
    public required bool Default { get; init; }

    /// <summary>
    /// Feature ids that must also be enabled.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("requires")]
    public IReadOnlyList<string>? Requires { get; init; }

    /// <summary>
    /// Marginal cost in bytes, brotli-compressed.
    /// </summary>
    [JsonPropertyName("size_br")]
    public required int SizeBr { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
