using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using BundleSocial.Core.Models;
using BundleSocial.Models.Enums;

namespace BundleSocial.Models;

public record Subscription
{
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    [JsonPropertyName("organizationId")]
    public required string OrganizationId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("couponId")]
    public string? CouponId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("promotionCodeId")]
    public string? PromotionCodeId { get; init; }

    [JsonPropertyName("stripeSubscriptionId")]
    public required string StripeSubscriptionId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("stripeSubscriptionItems")]
    public IReadOnlyList<StripeSubscriptionItem>? StripeSubscriptionItems { get; init; }

    [JsonPropertyName("status")]
    public required StatusBundleSocialOrganizationApi Status { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("metadata")]
    public object? Metadata { get; init; }

    [JsonPropertyName("stripePriceId")]
    public required string StripePriceId { get; init; }

    [JsonPropertyName("tier")]
    public required Tier Tier { get; init; }

    [JsonPropertyName("billingInterval")]
    public required BillingInterval BillingInterval { get; init; }

    [JsonPropertyName("isCustomPrice")]
    public required bool IsCustomPrice { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("customPriceLabel")]
    public string? CustomPriceLabel { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("customUnitAmount")]
    public int? CustomUnitAmount { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("customCurrency")]
    public string? CustomCurrency { get; init; }

    [JsonPropertyName("cancelAtPeriodEnd")]
    public required bool CancelAtPeriodEnd { get; init; }

    [JsonPropertyName("created")]
    public required DateTimeOffset? Created { get; init; }

    [JsonPropertyName("currentPeriodStart")]
    public required DateTimeOffset? CurrentPeriodStart { get; init; }

    [JsonPropertyName("currentPeriodEnd")]
    public required DateTimeOffset? CurrentPeriodEnd { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("endedAt")]
    public DateTimeOffset? EndedAt { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("cancelAt")]
    public DateTimeOffset? CancelAt { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("canceledAt")]
    public DateTimeOffset? CanceledAt { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("trialStart")]
    public DateTimeOffset? TrialStart { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("trialEnd")]
    public DateTimeOffset? TrialEnd { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("maxMonthlyPosts")]
    public double? MaxMonthlyPosts { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("maxMonthlyComments")]
    public double? MaxMonthlyComments { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("maxMonthlyUploads")]
    public double? MaxMonthlyUploads { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("maxMonthlyImportedPosts")]
    public double? MaxMonthlyImportedPosts { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pendingTier")]
    public PendingTier? PendingTier { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pendingBillingInterval")]
    public PendingBillingInterval? PendingBillingInterval { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pendingPriceId")]
    public string? PendingPriceId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pendingEffectiveAt")]
    public DateTimeOffset? PendingEffectiveAt { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pendingScheduleId")]
    public string? PendingScheduleId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("discountStart")]
    public DateTimeOffset? DiscountStart { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("discountEnd")]
    public DateTimeOffset? DiscountEnd { get; init; }

    [JsonPropertyName("createdAt")]
    public required DateTimeOffset? CreatedAt { get; init; }

    [JsonPropertyName("updatedAt")]
    public required DateTimeOffset? UpdatedAt { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("coupon")]
    public Coupon? Coupon { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("promotionCode")]
    public PromotionCode? PromotionCode { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
