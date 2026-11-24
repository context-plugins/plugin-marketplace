using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Givebutter.Core.Models;
using Givebutter.Models.AnyOf;

namespace Givebutter.Models;

public record TransactionResource1
{
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    [JsonPropertyName("number")]
    public required string Number { get; init; }

    [JsonPropertyName("campaign_id")]
    public required string CampaignId { get; init; }

    [JsonPropertyName("campaign_code")]
    public required string CampaignCode { get; init; }

    [JsonPropertyName("campaign_title")]
    public required string CampaignTitle { get; init; }

    [JsonPropertyName("plan_id")]
    public required string PlanId { get; init; }

    [JsonPropertyName("pledge_id")]
    public required string PledgeId { get; init; }

    [JsonPropertyName("team_id")]
    public required string TeamId { get; init; }

    [JsonPropertyName("team_name")]
    public required string TeamName { get; init; }

    [JsonPropertyName("member_id")]
    public required string MemberId { get; init; }

    [JsonPropertyName("member_name")]
    public required string MemberName { get; init; }

    [JsonPropertyName("fund_id")]
    public required string FundId { get; init; }

    [JsonPropertyName("fund_code")]
    public required string FundCode { get; init; }

    [JsonPropertyName("contact_id")]
    public required string ContactId { get; init; }

    [JsonPropertyName("first_name")]
    public required string FirstName { get; init; }

    [JsonPropertyName("last_name")]
    public required string LastName { get; init; }

    [JsonPropertyName("company_name")]
    public required string CompanyName { get; init; }

    [JsonPropertyName("company")]
    public required string Company { get; init; }

    [JsonPropertyName("email")]
    public required string Email { get; init; }

    [JsonPropertyName("phone")]
    public required string Phone { get; init; }

    [JsonPropertyName("address")]
    public required string Address { get; init; }

    [JsonPropertyName("status")]
    public required string Status { get; init; }

    [JsonPropertyName("payment_method")]
    public required string PaymentMethod { get; init; }

    [JsonPropertyName("method")]
    public required string Method { get; init; }

    [JsonPropertyName("is_offline")]
    public required string IsOffline { get; init; }

    [JsonPropertyName("check_number")]
    public required CheckNumber CheckNumber { get; init; }

    [JsonPropertyName("check_deposited_at")]
    public required CheckDepositedAt CheckDepositedAt { get; init; }

    [JsonPropertyName("internal_note")]
    public required string InternalNote { get; init; }

    [JsonPropertyName("amount")]
    public required double Amount { get; init; }

    [JsonPropertyName("fee")]
    public required double Fee { get; init; }

    [JsonPropertyName("fee_covered")]
    public required double FeeCovered { get; init; }

    [JsonPropertyName("donated")]
    public required double Donated { get; init; }

    [JsonPropertyName("payout")]
    public required double Payout { get; init; }

    [JsonPropertyName("currency")]
    public required string Currency { get; init; }

    [JsonPropertyName("transacted_at")]
    public required string TransactedAt { get; init; }

    [JsonPropertyName("created_at")]
    public required string CreatedAt { get; init; }

    [JsonPropertyName("updated_at")]
    public required string UpdatedAt { get; init; }

    [JsonPropertyName("timezone")]
    public required string Timezone { get; init; }

    [JsonPropertyName("giving_space")]
    public required GivingSpace GivingSpace { get; init; }

    [JsonPropertyName("dedication")]
    public required DedicationVariantQtelwf Dedication { get; init; }

    [JsonPropertyName("transactions")]
    [MinLength(1)]
    [MaxLength(1)]
    public required IReadOnlyList<object> Transactions { get; init; }

    [JsonPropertyName("custom_fields")]
    public required IReadOnlyList<CustomFieldResponseResource> CustomFields { get; init; }

    [JsonPropertyName("utm_parameters")]
    public required string UtmParameters { get; init; }

    [JsonPropertyName("external_id")]
    public required ExternalId ExternalId { get; init; }

    [JsonPropertyName("communication_opt_in")]
    public required string CommunicationOptIn { get; init; }

    [JsonPropertyName("session_id")]
    public required string SessionId { get; init; }

    [JsonPropertyName("attribution_data")]
    public required string AttributionData { get; init; }

    [JsonPropertyName("fair_market_value_amount")]
    public required string? FairMarketValueAmount { get; init; }

    [JsonPropertyName("tax_deductible_amount")]
    public required string? TaxDeductibleAmount { get; init; }

    [JsonPropertyName("is_recurring")]
    public required string IsRecurring { get; init; }

    [JsonPropertyName("payout_id")]
    public required PayoutId PayoutId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
