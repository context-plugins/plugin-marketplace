using System.Text.Json.Serialization;
using Skribble.Core.Models;
using Skribble.Core.Validation;
using Skribble.Core.Validation.Attributes;
using Skribble.Models.Enums;

namespace Skribble.Models;

/// <summary>
/// Optional (no-account) signer identity information.
/// </summary>
public record SignerIdentityData
{
    /// <summary>
    /// Email address of no-account-signer. Mandatory when <c>quality</c> is <c>SES</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("email_address")]
    [Format(FormatKind.Email)]
    public string? EmailAddress { get; init; }

    /// <summary>
    /// First name of no-account-signer
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("first_name")]
    public string? FirstName { get; init; }

    /// <summary>
    /// Last name of no-account-signer
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("last_name")]
    public string? LastName { get; init; }

    /// <summary>
    /// Mobile number of the no-account-signer in E.164 format without the leading <c>+</c>:
    /// country code + area code + number, no spaces or special characters.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("mobile_number")]
    public string? MobileNumber { get; init; }

    /// <summary>
    /// Determines in which language e-mails are sent to the user, if the user has not set their language preference yet.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("language")]
    public SignatureLanguage? Language { get; init; } = SignatureLanguage.En;

    /// <summary>
    /// Evidence provider where Skribble can verify the signer's identity data.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("provider")]
    public string? Provider { get; init; }

    /// <summary>
    /// Optional customer-generated identifier for further identification. When set together with <c>notify: false</c>,
    /// the TAN-based email validation for No-Account-Signers (SES) is skipped, allowing signers to sign directly
    /// without the Skribble TAN process.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("identity_reference")]
    public string? IdentityReference { get; init; }

    /// <summary>
    /// (optional) if set, even if the signer is already identified, a new identification process is started to get fresh evidence records.
    /// Only supported when the signature request's quality is <c>QES</c> and Express QES is enabled for the business;
    /// otherwise the request fails with a validation error.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("identification_require_evidence")]
    public bool? IdentificationRequireEvidence { get; init; }

    /// <summary>
    /// (optional) if set to <c>true</c>, this signer is always identified via the standard QES flow and is never routed
    /// through Express QES, regardless of the business's Express QES setting or other identity flags such as
    /// <c>identification_require_evidence</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("force_standard_qes")]
    public bool? ForceStandardQes { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
