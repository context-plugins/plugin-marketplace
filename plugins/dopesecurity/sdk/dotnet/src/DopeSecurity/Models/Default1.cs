using System.Collections.Generic;
using System.Text.Json.Serialization;
using DopeSecurity.Core.Models;

namespace DopeSecurity.Models;

/// <summary>
/// Default application bypass entries with their toggle states
/// </summary>
public record Default1
{
    /// <summary>
    /// Default bypass apps on macOS
    /// </summary>
    [JsonPropertyName("mac")]
    public required IReadOnlyList<DefaultBypassItem> Mac { get; init; }

    /// <summary>
    /// Default bypass apps on Windows
    /// </summary>
    [JsonPropertyName("windows")]
    public required IReadOnlyList<DefaultBypassItem> Windows { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
