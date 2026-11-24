using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;
using Apigee.Models.Enums;

namespace Apigee.Models;

/// <summary>
/// Rate plan details.
/// </summary>
public record GoogleCloudApigeeV1RatePlan
{
    /// <summary>
    /// API call volume ranges and the fees charged when the total number of API calls is within a given range. The method used to calculate the final fee depends on the selected pricing model. For example, if the pricing model is <c>BANDED</c> and the ranges are defined as follows: ``` { "start": 1, "end": 100, "fee": 2 }, { "start": 101, "end": 200, "fee": 1.50 }, { "start": 201, "end": 0, "fee": 1 }, } ``` Then the following fees would be charged based on the total number of API calls (assuming the currency selected is `USD`): * 50 calls cost 50 x $2 = $100 * 150 calls cost 100 x $2 + 50 x $1.5 = $275 * 250 calls cost 100 x $2 + 100 x $1.5 + 50 x $1 = $400 * 500 calls cost 100 x $2 + 100 x $1.5 + 300 x $1 = $650
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("consumptionPricingRates")]
    public IReadOnlyList<GoogleCloudApigeeV1RateRange>? ConsumptionPricingRates { get; init; }

    /// <summary>
    /// Description of the rate plan.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// Frequency at which the customer will be billed.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("billingPeriod")]
    public BillingPeriod? BillingPeriod { get; init; }

    /// <summary>
    /// Frequency at which the fixed fee is charged.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("fixedFeeFrequency")]
    public int? FixedFeeFrequency { get; init; }

    /// <summary>
    /// Time when the rate plan will expire in milliseconds since epoch. Set to 0 or <c>null</c> to indicate that the rate plan should never expire.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("endTime")]
    public string? EndTime { get; init; }

    /// <summary>
    /// Name of the API product that the rate plan is associated with.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("apiproduct")]
    public string? Apiproduct { get; init; }

    /// <summary>
    /// Current state of the rate plan (draft or published).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("state")]
    public State7? State { get; init; }

    /// <summary>
    /// Output only. Name of the rate plan.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// Time when the rate plan becomes active in milliseconds since epoch.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("startTime")]
    public string? StartTime { get; init; }

    /// <summary>
    /// Output only. Time the rate plan was last modified in milliseconds since epoch.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lastModifiedAt")]
    public string? LastModifiedAt { get; init; }

    /// <summary>
    /// Display name of the rate plan.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("displayName")]
    public string? DisplayName { get; init; }

    /// <summary>
    /// Output only. Time that the rate plan was created in milliseconds since epoch.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("createdAt")]
    public string? CreatedAt { get; init; }

    /// <summary>
    /// Method used to calculate the revenue that is shared with developers.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("revenueShareType")]
    public RevenueShareType? RevenueShareType { get; init; }

    /// <summary>
    /// Pricing model used for consumption-based charges.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("consumptionPricingType")]
    public ConsumptionPricingType? ConsumptionPricingType { get; init; }

    /// <summary>
    /// Fixed amount that is charged at a defined interval and billed in advance of use of the API product. The fee will be prorated for the first billing period.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("fixedRecurringFee")]
    public GoogleTypeMoney5? FixedRecurringFee { get; init; }

    /// <summary>
    /// Initial, one-time fee paid when purchasing the API product.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("setupFee")]
    public GoogleTypeMoney6? SetupFee { get; init; }

    /// <summary>
    /// Currency to be used for billing. Consists of a three-letter code as defined by the <see href="https://en.wikipedia.org/wiki/ISO_4217">ISO 4217</see> standard.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("currencyCode")]
    public string? CurrencyCode { get; init; }

    /// <summary>
    /// Details of the revenue sharing model.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("revenueShareRates")]
    public IReadOnlyList<GoogleCloudApigeeV1RevenueShareRange>? RevenueShareRates { get; init; }

    /// <summary>
    /// DEPRECATED: This field is no longer supported and will eventually be removed when Apigee Hybrid 1.5/1.6 is no longer supported. Instead, use the <c>billingType</c> field inside <c>DeveloperMonetizationConfig</c> resource. Flag that specifies the billing account type, prepaid or postpaid.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("paymentFundingModel")]
    public PaymentFundingModel? PaymentFundingModel { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
