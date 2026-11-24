using System.Collections.Generic;
using System.Text.Json.Serialization;
using Statable.Core.Models;

namespace Statable.Models;

public record TrackingSettingsRequest
{
    /// <summary>
    /// The complete desired selection. Send [] to keep only the locked defaults. Omitting the key is an error, not "unchanged".
    /// </summary>
    [JsonPropertyName("features")]
    public required IReadOnlyList<string> Features { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
