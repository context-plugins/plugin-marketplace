using System.Collections.Generic;
using System.Text.Json.Serialization;
using DopeSecurity.Core.Models;

namespace DopeSecurity.Models;

/// <summary>
/// Default application entries with updated toggle states (matched by name), keyed by platform.
/// </summary>
public record Default
{
    /// <summary>
    /// Default bypass apps on macOS.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("mac")]
    public IReadOnlyList<DefaultBypassItem>? Mac { get; init; }

    /// <summary>
    /// Default bypass apps on Windows.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("windows")]
    public IReadOnlyList<DefaultBypassItem>? Windows { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
