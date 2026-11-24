using System.Text.Json.Serialization;
using Skribble.Core.Models;
using Skribble.Core.Validation;
using Skribble.Core.Validation.Attributes;
using Skribble.Models.Enums;

namespace Skribble.Models;

/// <summary>
/// Signer identity information returned as part of the SignatureRequest response.
/// </summary>
public record SignerIdentityDataInResponse
{
    /// <summary>
    /// Email address of the no-account-signer.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("email_address")]
    [Format(FormatKind.Email)]
    public string? EmailAddress { get; init; }

    /// <summary>
    /// First name of the no-account-signer.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("first_name")]
    public string? FirstName { get; init; }

    /// <summary>
    /// Last name of the no-account-signer.
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
    /// Customer-generated identifier for further identification of the signer.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("identity_reference")]
    public string? IdentityReference { get; init; }

    /// <summary>
    /// If set, a new identification process is started to get fresh evidence records, even if the signer is already identified.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("identification_require_evidence")]
    public bool? IdentificationRequireEvidence { get; init; }

    /// <summary>
    /// If set to <c>true</c>, this signer is always identified via the standard QES flow and is never routed
    /// through Express QES, regardless of the business's Express QES setting or other identity flags such as
    /// <c>identification_require_evidence</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("force_standard_qes")]
    public bool? ForceStandardQes { get; init; }

    /// <summary>
    /// Evidence provider used to verify the signer's identity.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("provider")]
    public string? Provider { get; init; }

    /// <summary>
    /// ID of the evidence records created during identification. Populated in the
    /// <c>SignatureRequest</c> response once the identification process has been completed.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("evidence_id")]
    public string? EvidenceId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
