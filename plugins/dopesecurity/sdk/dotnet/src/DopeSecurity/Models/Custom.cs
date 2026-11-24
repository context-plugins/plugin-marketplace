using System.Collections.Generic;
using System.Text.Json.Serialization;
using DopeSecurity.Core.Models;

namespace DopeSecurity.Models;

/// <summary>
/// Custom application entries to upsert (matched by name), keyed by platform.
/// </summary>
public record Custom
{
    /// <summary>
    /// Custom bypass apps on macOS.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("mac")]
    public IReadOnlyList<CustomBypassRequestItem>? Mac { get; init; }

    /// <summary>
    /// Custom bypass apps on Windows.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("windows")]
    public IReadOnlyList<CustomBypassRequestItem>? Windows { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
