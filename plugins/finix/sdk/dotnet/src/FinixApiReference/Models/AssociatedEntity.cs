using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;
using FinixApiReference.Models.AnyOf;
using FinixApiReference.Models.Enums;

namespace FinixApiReference.Models;

/// <summary>
/// Underwriting data that's required to verify the <c>Identity</c>.
/// </summary>
public record AssociatedEntity
{
    /// <summary>
    /// The annual credit card sales (in cents) expected to be processed (max 19 characters).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("annual_card_volume")]
    public AnnualCardVolume? AnnualCardVolume { get; init; }

    /// <summary>
    /// The primary address for the legal entity.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("business_address")]
    public BusinessAddress6? BusinessAddress { get; init; }

    /// <summary>
    /// Abbreviated names of the business. If there are no abbreviated name, leave this field blank.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("business_name")]
    [MinLength(1)]
    public string? BusinessName { get; init; }

    /// <summary>
    /// Customer service phone number where the merchant can be reached (max 10 characters).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("business_phone")]
    [MinLength(1)]
    public string? BusinessPhone { get; init; }

    /// <summary>
    /// Nine digit Tax Identification Number (TIN), Employer Identification Number (EIN). If the <c>business_type</c> is <b>INDIVIDUAL\_SOLE\_PROPRIETORSHIP</b> and they do not have an EIN, use the sole proprietor's Social Security Number (SSN).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("business_tax_id")]
    [MinLength(1)]
    public string? BusinessTaxId { get; init; }

    /// <summary>
    /// Include the value that best applies to the merchant.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("business_type")]
    public BusinessType3? BusinessType { get; init; }

    /// <summary>
    /// The description of the <c>Merchant</c> that appears on the buyer's bank or card statement.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("default_statement_descriptor")]
    [MaxLength(20)]
    public string? DefaultStatementDescriptor { get; init; }

    /// <summary>
    /// The control owner's date of birth.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dob")]
    public Dob3? Dob { get; init; }

    /// <summary>
    /// Alternate names of the business. If there are no other names, pass the same value used for <c>business_name</c> (max 60 characters).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("doing_business_as")]
    [MinLength(1)]
    public string? DoingBusinessAs { get; init; }

    /// <summary>
    /// The email address of the principal control owner where they can be reached (max 100 characters).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("email")]
    [MinLength(1)]
    public string? Email { get; init; }

    /// <summary>
    /// The legal first name of the control owner (max 20 characters).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("first_name")]
    [MinLength(1)]
    public string? FirstName { get; init; }

    /// <summary>
    /// Defaults to <b>false</b> if not passed.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("has_accepted_credit_cards_previously")]
    public bool? HasAcceptedCreditCardsPreviously { get; init; }

    /// <summary>
    /// The date the company was founded and registered.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("incorporation_date")]
    public IncorporationDate? IncorporationDate { get; init; }

    /// <summary>
    /// The <c>Identity</c> owner's legal last name.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("last_name")]
    [MinLength(1)]
    public string? LastName { get; init; }

    /// <summary>
    /// The maximum amount (in cents) that can be charged for a single transaction (max 12 characters).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("max_transaction_amount")]
    public int? MaxTransactionAmount { get; init; }

    /// <summary>
    /// The Merchant Category Code (<see href="http://www.dm.usda.gov/procurement/card/card\_x/mcc.pdf">MCC</see>) that this merchant will be classified under. For a list of approved MCCs, see <see href="/guides/managing-operations/security-compliance/approved-merchant-category-codes">Approved Merchant Category Codes.</see>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("mcc")]
    [MinLength(1)]
    public string? Mcc { get; init; }

    /// <summary>
    /// Values can be either:
    /// - <c>PUBLIC</c> to indicate a publicly-traded company.
    /// - <c>PRIVATE</c> for privately-held businesses.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ownership_type")]
    [MinLength(1)]
    public string? OwnershipType { get; init; }

    /// <summary>
    /// The home address of the principal control owner. This field is used for identity verification purposes.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("personal_address")]
    public PersonalAddress3? PersonalAddress { get; init; }

    /// <summary>
    /// The principal control owner's phone number (max 10 characters).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("phone")]
    [MinLength(1)]
    public string? Phone { get; init; }

    /// <summary>
    /// Percentage of the company owned by the principal control owner (min 0; max 100).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("principal_percentage_ownership")]
    public int? PrincipalPercentageOwnership { get; init; }

    /// <summary>
    /// Details if the <c>tax_id</c> was provided.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tax_id")]
    [MinLength(1)]
    public string? TaxId { get; init; }

    /// <summary>
    /// The corporate title of the control owner (e.g. Chief Executive Officer, CFO, etc. Max 60 characters).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("title")]
    [MinLength(1)]
    public string? Title { get; init; }

    /// <summary>
    /// The URL of the <c>Identity</c> owner's public website.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("url")]
    [MinLength(1)]
    public string? Url { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
