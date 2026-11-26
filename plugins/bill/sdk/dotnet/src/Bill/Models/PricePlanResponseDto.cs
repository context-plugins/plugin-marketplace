using System.Collections.Generic;
using System.Text.Json.Serialization;
using Bill.Core.Models;

namespace Bill.Models;

/// <summary>
/// Organization price plan response.
/// </summary>
public record PricePlanResponseDto
{
    /// <summary>
    /// BILL-generated ID of the price plan. The value begins with <c>ppl</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public string? Id { get; init; }

    /// <summary>
    /// Price plan name
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// Price plan monthly subscription fee
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("monthlyPrice")]
    public double? MonthlyPrice { get; init; }

    /// <summary>
    /// Set as <c>true</c> if the price plan allows a trial
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("allowTrial")]
    public bool? AllowTrial { get; init; }

    /// <summary>
    /// Set as <c>true</c> if the price plan has per-user pricing
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("priceVariesPerUser")]
    public bool? PriceVariesPerUser { get; init; }

    /// <summary>
    /// Terms and conditions for additional charges in the price plan. These charges are for price plan features based on a combination of charge <c>type</c>, <c>tier</c>, <c>quantity</c>, and <c>price</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("planTerms")]
    public IReadOnlyList<PlanTerm>? PlanTerms { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
