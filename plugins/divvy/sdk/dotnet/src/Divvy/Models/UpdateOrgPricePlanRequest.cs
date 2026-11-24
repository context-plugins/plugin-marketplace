using System.Text.Json.Serialization;
using Divvy.Core.Models;
using Divvy.Models.Enums;

namespace Divvy.Models;

/// <summary>
/// Update an organization price plan
/// </summary>
public record UpdateOrgPricePlanRequest
{
    [JsonPropertyName("pricePlanType")]
    public required PartnerPricePlanType PricePlanType { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
