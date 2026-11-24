using System.Collections.Generic;
using System.Text.Json.Serialization;
using DopeSecurity.Core.Models;

namespace DopeSecurity.Models;

/// <summary>
/// Custom application bypass entries defined by the admin
/// </summary>
public record Custom2
{
    /// <summary>
    /// Custom bypass apps on macOS
    /// </summary>
    [JsonPropertyName("mac")]
    public required IReadOnlyList<CustomBypassItem> Mac { get; init; }

    /// <summary>
    /// Custom bypass apps on Windows
    /// </summary>
    [JsonPropertyName("windows")]
    public required IReadOnlyList<CustomBypassItem> Windows { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
