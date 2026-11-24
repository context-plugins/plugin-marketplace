using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using JuriSign.Core.Models;
using JuriSign.Core.Validation;
using JuriSign.Core.Validation.Attributes;
using JuriSign.Models.Enums;

namespace JuriSign.Models;

public record CreateSignRequestInput
{
    /// <summary>
    /// UUID of a previously uploaded document
    /// </summary>
    [JsonPropertyName("document_id")]
    public required Guid DocumentId { get; init; }

    /// <summary>
    /// Email subject line for signers
    /// </summary>
    [JsonPropertyName("subject")]
    [MaxLength(255)]
    public required string Subject { get; init; }

    /// <summary>
    /// Optional message included in the invitation email
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("message")]
    [MaxLength(2000)]
    public string? Message { get; init; }

    /// <summary>
    /// Arbitrary key-value metadata for your records
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("metadata")]
    public object? Metadata { get; init; }

    /// <summary>
    /// Must use https and match the domain declared for your organization, or the request is rejected with a 422. Contact support to register your domain.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("redirect_url")]
    [MaxLength(2048)]
    [Format(FormatKind.Uri)]
    public string? RedirectUrl { get; init; }

    /// <summary>
    /// Request a payment from the signer once they've signed ("sign then pay" — the signature is never blocked by payment). Requires an active Stripe Connect account for your organization (see Settings &gt; Paiement à la signature), or the request is rejected with a 422. JuriSign never holds the funds: they go directly to your own Stripe account, minus a fixed 0.90€ platform fee.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("payment")]
    public Payment? Payment { get; init; }

    /// <summary>
    /// 0 = parallel (all signers at once), 1 = sequential (one after another)
    /// </summary>
    [JsonPropertyName("signing_order_type")]
    public required SigningOrderType SigningOrderType { get; init; }

    /// <summary>
    /// Hours until the request expires (max 30 days)
    /// </summary>
    [JsonPropertyName("expiry_hours")]
    [Minimum(1)]
    [Maximum(720)]
    public required int ExpiryHours { get; init; }

    [JsonPropertyName("signers")]
    [MinLength(1)]
    [MaxLength(10)]
    public required IReadOnlyList<Signer> Signers { get; init; }

    /// <summary>
    /// Signature zone positions. Auto-generated at bottom of last page if omitted.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("zones")]
    public IReadOnlyList<Zone>? Zones { get; init; }

    /// <summary>
    /// Require signers to take a selfie for identity verification
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("require_selfie")]
    public bool? RequireSelfie { get; init; } = false;

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
