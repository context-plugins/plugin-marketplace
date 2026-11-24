using System.Collections.Generic;
using System.Text.Json.Serialization;
using AtlassianCompass.Core.Models;
using AtlassianCompass.Core.Validation.Attributes;

namespace AtlassianCompass.Models;

public record EntitlementRequestDto
{
    /// <summary>
    /// The entitlements to evaluate for the given user and site
    /// </summary>
    [JsonPropertyName("entitlements")]
    [UniqueItems]
    public required IReadOnlyList<string> Entitlements { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
