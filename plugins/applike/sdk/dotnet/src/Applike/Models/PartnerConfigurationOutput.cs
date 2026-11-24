using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Applike.Core.Models;
using Applike.Core.Validation.Attributes;
using Applike.Models.Enums;

namespace Applike.Models;

public record PartnerConfigurationOutput
{
    [JsonPropertyName("features")]
    public required IReadOnlyList<RequiredFeature> Features { get; init; }

    [JsonPropertyName("key")]
    [MinLength(1)]
    public required string Key { get; init; }

    /// <summary>
    /// justtrack's internal ID for the partner
    /// </summary>
    [JsonPropertyName("partnerId")]
    [Minimum(1)]
    public required int PartnerId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
