using System.Collections.Generic;
using System.Text.Json.Serialization;
using BundleSocial.Core.Models;

namespace BundleSocial.Models;

public record ApiV1MiscFacebookTextFormatPresetsResponse
{
    [JsonPropertyName("presets")]
    public required IReadOnlyList<Preset> Presets { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
