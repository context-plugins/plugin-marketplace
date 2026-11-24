using System.Collections.Generic;
using System.Text.Json.Serialization;
using AtlassianCompass.Core.Models;

namespace AtlassianCompass.Models;

public record EntitlementResponseDto
{
    /// <summary>
    /// A map of entitlements to the result given a user and site
    /// </summary>
    [JsonPropertyName("entitlements")]
    public required IReadOnlyDictionary<string, EntitlementResultDto> Entitlements { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
