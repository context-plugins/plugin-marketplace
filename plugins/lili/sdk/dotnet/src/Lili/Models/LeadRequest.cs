using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Lili.Core.Models;
using Lili.Core.Validation;
using Lili.Core.Validation.Attributes;
using Lili.Models.Enums;

namespace Lili.Models;

/// <summary>
/// Contains the information about an account partner wants to register
/// </summary>
public record LeadRequest
{
    /// <summary>
    /// The unique ID of the webhook
    /// </summary>
    [JsonPropertyName("email")]
    [Format(FormatKind.Email)]
    public required string Email { get; init; }

    /// <summary>
    /// Customer phone number. E.164 format.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("phoneNumber")]
    public string? PhoneNumber { get; init; }

    /// <summary>
    /// Customer SSN
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ssn")]
    [RegularExpression("^(?!666|000|9\\d{2})\\d{3}-\\d{2}-(?!0{4})\\d{4}$|^(?!666|000|9\\d{2})\\d{3}\\d{2}(?!0{4})\\d{4}$")]
    public string? Ssn { get; init; }

    /// <summary>
    /// Customer birth date
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("birthDate")]
    public DateTimeOffset? BirthDate { get; init; }

    /// <summary>
    /// Customer first name
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("firstName")]
    public string? FirstName { get; init; }

    /// <summary>
    /// Customer last name
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lastName")]
    public string? LastName { get; init; }

    /// <summary>
    /// Customer address line1
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("line1")]
    public string? Line1 { get; init; }

    /// <summary>
    /// Customer address line2
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("line2")]
    public string? Line2 { get; init; }

    /// <summary>
    /// Customer address city
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("city")]
    [StringLength(30, MinimumLength = 1)]
    public string? City { get; init; }

    /// <summary>
    /// Customer address 2 letter state code
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("state")]
    public string? State { get; init; }

    /// <summary>
    /// Customer country of residence (Alpha 2, ISO 3166 format)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("country")]
    public string? Country { get; init; }

    /// <summary>
    /// Customer address postal code
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("postalCode")]
    [RegularExpression("^\\d{5}(-\\d{4})?$")]
    public string? PostalCode { get; init; }

    /// <summary>
    /// Business EIN
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ein")]
    [RegularExpression("^(0[1-6]|1[0-6]|2[0-7]|3[0-9]|4[0-8]|5[0-9]|6[0-8]|7[1-7]|8[0-8]|9[0-5]|9[8-9])[0-9]{7}$")]
    public string? Ein { get; init; }

    /// <summary>
    /// Business name
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("businessName")]
    public string? BusinessName { get; init; }

    /// <summary>
    /// The physical (operational) address where the business operates day-to-day. Must be a US address. Used as the address in the Beneficial Ownership file.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("businessAddress")]
    public AddressData2? BusinessAddress { get; init; }

    /// <summary>
    /// The registered business address (the address the business provided to the state of formation to accept legal process). Can be outside of the US, in case only a registered agent address is available. Used as the billing address and presented on bank statements and invoices.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("registeredBusinessAddress")]
    public AddressData3? RegisteredBusinessAddress { get; init; }

    /// <summary>
    /// Business mailing address. Optional. Must be in the US, can be a registered agent address. Used as the card shipment address for Non-US applicants when selected.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("mailingAddress")]
    public AddressData4? MailingAddress { get; init; }

    /// <summary>
    /// Incorporation type of the business
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("businessType")]
    public BusinessType? BusinessType { get; init; }

    /// <summary>
    /// State the business was incorporated in
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("incorporationState")]
    public string? IncorporationState { get; init; }

    /// <summary>
    /// Unique ID to be used by the partner to identify the customer
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("uniqueId")]
    public string? UniqueId { get; init; }

    /// <summary>
    /// Business DUNS number
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("duns")]
    public string? Duns { get; init; }

    /// <summary>
    /// Passport number
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("passportNumber")]
    public string? PassportNumber { get; init; }

    /// <summary>
    /// Non US customer National ID number
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("idGovNumber")]
    public string? IdGovNumber { get; init; }

    /// <summary>
    /// National ID country (Alpha 2, ISO 3166 format).
    /// Note that if a passport number is supplied, this is the passport issuance country
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("idCountry")]
    public string? IdCountry { get; init; }

    /// <summary>
    /// National ID expiration date. Note that if passport number is supplied, this is the passport expiration date
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("idExpirationDate")]
    public string? IdExpirationDate { get; init; }

    /// <summary>
    /// The ownership percentage of the customer
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ownershipPercent")]
    [Minimum(0.0)]
    [Maximum(100.0)]
    public double? OwnershipPercent { get; init; }

    /// <summary>
    /// A list of URLs containing the business documents of the customer
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("documentUrls")]
    public IReadOnlyList<string?>? DocumentUrls { get; init; }

    /// <summary>
    /// A list of Base64 encoded documents
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("documentDataList")]
    public IReadOnlyList<DocumentData>? DocumentDataList { get; init; }

    /// <summary>
    /// A list of UBOs with &gt;25% of the business ownership
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("uboList")]
    public IReadOnlyList<UboData>? UboList { get; init; }

    /// <summary>
    /// NAICS code of the business
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("naicsCode")]
    public string? NaicsCode { get; init; }

    /// <summary>
    /// Campaign code
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("campaign")]
    public string? Campaign { get; init; }

    /// <summary>
    /// A map of key-value pairs to store additional partner-specific data on the customer
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("metadata")]
    public IReadOnlyDictionary<string, string>? Metadata { get; init; }

    /// <summary>
    /// A list of EDD questions and answers
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("eddQuestionData")]
    public IReadOnlyList<EddQuestionData>? EddQuestionData { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
