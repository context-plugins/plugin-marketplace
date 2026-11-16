using System.Collections.Generic;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;
using FinixApiReference.Models.Enums;

namespace FinixApiReference.Models;

/// <summary>
/// The prefilled information of the user that's being onboarded. For more information, see <see href="/guides/platform-payments/onboarding-sellers/seller-onboarding-forms/#prefilling-fields">Prefilling Fields</see>.
/// </summary>
public record OnboardingData
{
    /// <summary>
    /// Additional underwriting data about the user.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("additional_underwriting_data")]
    public AdditionalUnderwritingData3? AdditionalUnderwritingData { get; init; }

    /// <summary>
    /// The <c>entities</c> saved in the <c>associated_identities</c> of the user. For more information, see <see href="#operation/createAssociatedIdentity">Create an Associated Identity</see>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("associated_entities")]
    public IReadOnlyList<AssociatedEntity>? AssociatedEntities { get; init; }

    /// <summary>
    /// Country of the Merchant's business
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("country")]
    public Country1? Country { get; init; }

    /// <summary>
    /// The <c>entity</c> information saved in the <c>Identity</c> of the user.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("entity")]
    public Entity9? Entity { get; init; }

    /// <summary>
    /// The <c>Payment Instrument</c> that'll be used to payout the seller. For more information, see <see href="/guides/payouts/">Payouts</see>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("payment_instruments")]
    public PaymentInstruments2? PaymentInstruments { get; init; }

    /// <summary>
    /// Maximum card amount that can be transacted for a single transaction in cents (max 12 characters). Must be equal to or less than your <c>max_transaction_amount</c>.
    /// </summary>
    [JsonPropertyName("max_transaction_amount")]
    public required int MaxTransactionAmount { get; init; }

    /// <summary>
    /// Maximum ACH amount that can be transacted for a single transaction in cents (max 12 characters). Must be equal to or less than your <c>ach_max_transaction_amount</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ach_max_transaction_amount")]
    public int? AchMaxTransactionAmount { get; init; }

    /// <summary>
    /// List of <see href="#Files">Files</see> your user uploaded inside their Onboarding Form.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("associated_files")]
    public IReadOnlyList<AssociatedFile>? AssociatedFiles { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
