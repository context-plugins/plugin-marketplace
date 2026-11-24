using System.Collections.Generic;
using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

/// <summary>
/// Response containing the supported features for a CloudConnect account.
/// </summary>
public record SupportedFeaturesResponse
{
    /// <summary>
    /// List of features and their permission status.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("supportedFeatures")]
    public IReadOnlyList<SupportedFeature>? SupportedFeatures { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
