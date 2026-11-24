using System.Text.Json.Serialization;
using Applike.Core.Models;
using Applike.Core.Validation.Attributes;

namespace Applike.Models;

public record ListPartnerConfigurationFeaturesFilter
{
    /// <summary>
    /// justtrack's internal ID for the app
    /// </summary>
    [JsonPropertyName("appId")]
    [Minimum(1)]
    public required int AppId { get; init; }

    /// <summary>
    /// justtrack's internal ID for the partner
    /// </summary>
    [JsonPropertyName("partnerId")]
    [Minimum(1)]
    public required int PartnerId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
