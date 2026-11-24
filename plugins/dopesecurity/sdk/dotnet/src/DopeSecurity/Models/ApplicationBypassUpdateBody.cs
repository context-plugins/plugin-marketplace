using System.Text.Json.Serialization;
using DopeSecurity.Core.Models;

namespace DopeSecurity.Models;

/// <summary>
/// Payload for upserting application bypass entries. At least one of <c>custom</c> or <c>default</c> must be provided. Under each, at least one of <c>mac</c> or <c>windows</c> must be provided. Unmentioned custom entries are preserved. Unknown default entry names are silently ignored.
/// </summary>
public record ApplicationBypassUpdateBody
{
    /// <summary>
    /// Custom application entries to upsert (matched by name), keyed by platform.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("custom")]
    public Custom? Custom { get; init; }

    /// <summary>
    /// Default application entries with updated toggle states (matched by name), keyed by platform.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("default")]
    public Default? Default { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
