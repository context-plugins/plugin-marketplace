using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;
using FinixApiReference.Models.AnyOf;
using FinixApiReference.Models.Enums;

namespace FinixApiReference.Models;

/// <summary>
/// The <c>entity</c> information saved in the <c>Identity</c> of the user.
/// </summary>
public record Entity9
{
    /// <summary>
    /// Assigned amexMid value. If a value is passed, it must be 10 or 11 digits.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("amex_mid")]
    public int? AmexMid { get; init; }

    /// <summary>
    /// The annual credit card sales (in cents) expected to be processed by this seller (max 19 characters).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("annual_card_volume")]
    public AnnualCardVolume1? AnnualCardVolume { get; init; }

    /// <summary>
    /// The primary address for the legal entity.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("business_address")]
    public BusinessAddress? BusinessAddress { get; init; }

    /// <summary>
    /// The merchant's legal business name (max 120 characters).&lt;ul&gt;&lt;li&gt;If &lt;code&gt;INDIVIDUAL_SOLE_PROPRIETORSHIP&lt;/code&gt;, pass the owner's legal first name, last name, and middle initial.&lt;/li&gt;&lt;/ul&gt;
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("business_name")]
    [MinLength(1)]
    public string? BusinessName { get; init; }

    /// <summary>
    /// Customer service phone number where the seller can be reached (max 10 characters).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("business_phone")]
    [MinLength(1)]
    public string? BusinessPhone { get; init; }

    /// <summary>
    /// Details if the <c>business_tax_id</c> was provided.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("business_tax_id_provided")]
    public bool? BusinessTaxIdProvided { get; init; }

    /// <summary>
    /// Include the value that best applies to the seller.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("business_type")]
    public BusinessType4? BusinessType { get; init; }

    /// <summary>
    /// The description of the <c>Merchant</c> that appears on the buyer's bank or card statement.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("default_statement_descriptor")]
    [MaxLength(20)]
    public string? DefaultStatementDescriptor { get; init; }

    /// <summary>
    /// Assigned discoverMid value.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("discover_mid")]
    public int? DiscoverMid { get; init; }

    /// <summary>
    /// The control owner's date of birth.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dob")]
    public Dob? Dob { get; init; }

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
    /// The legal first name of the merchant's control owner (max 20 characters).
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
    /// The date the company was founded and registered with the US.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("incorporation_date")]
    public IncorporationDate4? IncorporationDate { get; init; }

    /// <summary>
    /// The legal last name of the merchant's control owner (max 20 characters).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("last_name")]
    [MinLength(1)]
    public string? LastName { get; init; }

    /// <summary>
    /// The Merchant Category Code (<see href="http://www.dm.usda.gov/procurement/card/card\_x/mcc.pdf">MCC</see>) that this merchant will be classified under. For a list of approved MCCs, see <see href="/guides/managing-operations/security-compliance/approved-merchant-category-codes">Approved Merchant Category Codes.</see>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("mcc")]
    [MinLength(1)]
    public string? Mcc { get; init; }

    /// <summary>
    /// Values can be either: &lt;ul&gt;&lt;li&gt;&lt;strong&gt;PUBLIC&lt;/strong&gt; to indicate a publicly-traded company.&lt;/li&gt;&lt;li&gt;&lt;strong&gt;PRIVATE&lt;/strong&gt; for privately-held businesses.&lt;/li&gt;&lt;/ul&gt;
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ownership_type")]
    public OwnershipType? OwnershipType { get; init; }

    /// <summary>
    /// The home address of the merchant's principal control owner. This field is used for identity verification purposes.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("personal_address")]
    public PersonalAddress4? PersonalAddress { get; init; }

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
    public PrincipalPercentageOwnership? PrincipalPercentageOwnership { get; init; }

    /// <summary>
    /// Abbreviated names of the business. If there are no abbreviated name, leave this field blank.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("short_business_name")]
    public string? ShortBusinessName { get; init; }

    /// <summary>
    /// &lt;ul&gt;&lt;li&gt;Only required when onboarding a seller with a &lt;code&gt;MCC&lt;/code&gt; of &lt;code&gt;9311&lt;/code&gt;.&lt;/li&gt;&lt;li&gt;The &lt;code&gt;tax_authority&lt;/code&gt; is the tax gathering entity (e.g., San Francisco Water Authority).&lt;/li&gt;&lt;/ul&gt;
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tax_authority")]
    public string? TaxAuthority { get; init; }

    /// <summary>
    /// The control owner's Social Security Number (SSN). Masked in responses (e.g., <c>*****3333</c>).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tax_id")]
    [MinLength(1)]
    public string? TaxId { get; init; }

    /// <summary>
    /// Details if the <c>tax_id</c> was provided.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tax_id_provided")]
    public bool? TaxIdProvided { get; init; }

    /// <summary>
    /// Nine digit Tax Identification Number (TIN) or Employer Identification Number (EIN). Masked in responses (e.g., <c>*****2222</c>).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("business_tax_id")]
    [MinLength(1)]
    public string? BusinessTaxId { get; init; }

    /// <summary>
    /// The corporate title of the control owner (e.g. Chief Executive Officer, CFO, etc. Max 60 characters).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("title")]
    [MinLength(1)]
    public string? Title { get; init; }

    /// <summary>
    /// The URL of the merchant's public website.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("url")]
    [MinLength(1)]
    public string? Url { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
