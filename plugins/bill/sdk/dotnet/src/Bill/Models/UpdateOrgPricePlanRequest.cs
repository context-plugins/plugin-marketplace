using System.Text.Json.Serialization;
using Bill.Core.Models;
using Bill.Models.Enums;

namespace Bill.Models;

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
