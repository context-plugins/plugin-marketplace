using System.Text.Json.Serialization;
using Justtrack.Core.Models;
using Justtrack.Core.Validation.Attributes;
using Justtrack.Models.Enums;

namespace Justtrack.Models;

public record ListPartnerConfigurationsFilter
{
    /// <summary>
    /// justtrack's internal ID for the partner
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("partnerId")]
    [Minimum(1)]
    public int? PartnerId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("feature")]
    public Feature? Feature { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
