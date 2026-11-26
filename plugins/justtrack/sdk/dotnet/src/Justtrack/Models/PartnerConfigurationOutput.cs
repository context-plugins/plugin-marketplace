using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Justtrack.Core.Models;
using Justtrack.Core.Validation.Attributes;
using Justtrack.Models.Enums;

namespace Justtrack.Models;

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
