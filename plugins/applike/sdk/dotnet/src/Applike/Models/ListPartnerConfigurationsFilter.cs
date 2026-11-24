using System.Text.Json.Serialization;
using Applike.Core.Models;
using Applike.Core.Validation.Attributes;
using Applike.Models.Enums;

namespace Applike.Models;

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
