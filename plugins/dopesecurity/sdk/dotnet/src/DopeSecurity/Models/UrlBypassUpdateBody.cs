using System.Collections.Generic;
using System.Text.Json.Serialization;
using DopeSecurity.Core.Models;

namespace DopeSecurity.Models;

/// <summary>
/// Payload for upserting URL bypass entries. At least one of <c>custom</c> or <c>default</c> must be provided. Unmentioned custom entries are preserved. Unknown default entry names are silently ignored.
/// </summary>
public record UrlBypassUpdateBody
{
    /// <summary>
    /// Custom URL entries to upsert (matched by name).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("custom")]
    public IReadOnlyList<CustomBypassRequestItem>? Custom { get; init; }

    /// <summary>
    /// Default URL entries with updated toggle states (matched by name).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("default")]
    public IReadOnlyList<DefaultBypassItem>? Default { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
