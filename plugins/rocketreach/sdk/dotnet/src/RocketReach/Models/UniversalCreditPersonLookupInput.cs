using System.Collections.Generic;
using System.Text.Json.Serialization;
using RocketReach.Core.Models;
using RocketReach.Core.Validation;
using RocketReach.Core.Validation.Attributes;

namespace RocketReach.Models;

public record UniversalCreditPersonLookupInput
{
    /// <summary>
    /// RocketReach internal unique profile ID
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public int? Id { get; init; }

    /// <summary>
    /// Name of the desired profile. Must specify along with <c>current_employer</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// Current employer of the desired profile. Must specify along with <c>name</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("current_employer")]
    public string? CurrentEmployer { get; init; }

    /// <summary>
    /// Job title of the desired profile
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("title")]
    public string? Title { get; init; }

    /// <summary>
    /// linkedin_ext_url deprecated, please use <c>linkedin_url</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("linkedin_ext_url")]
    public string? LinkedinExtUrl { get; init; }

    /// <summary>
    /// LinkedIn URL of the desired profile
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("linkedin_url")]
    public string? LinkedinUrl { get; init; }

    /// <summary>
    /// An email address for the desired profile
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("email")]
    [Format(FormatKind.Email)]
    public string? Email { get; init; }

    /// <summary>
    /// A phone number for the desired profile in either E.164 format or international format.
    /// - Example: <c>+15555555555</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("phone")]
    public string? Phone { get; init; }

    /// <summary>
    /// An NPI number for the desired profile (US healthcare professional)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("npi_number")]
    public int? NpiNumber { get; init; }

    /// <summary>
    /// Whether to reveal the phone enrichment data for the desired profile
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("reveal_phone")]
    public bool? RevealPhone { get; init; } = false;

    /// <summary>
    /// Whether to reveal the professional email enrichment data for the desired profile
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("reveal_professional_email")]
    public bool? RevealProfessionalEmail { get; init; } = false;

    /// <summary>
    /// Whether to reveal the personal email enrichment data for the desired profile
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("reveal_personal_email")]
    public bool? RevealPersonalEmail { get; init; } = false;

    /// <summary>
    /// Whether to reveal the detailed person enrichment data for the desired profile
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("reveal_detailed_person_enrichment")]
    public bool? RevealDetailedPersonEnrichment { get; init; } = false;

    /// <summary>
    /// Whether to reveal the healthcare enrichment data for the desired profile
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("reveal_healthcare_enrichment")]
    public bool? RevealHealthcareEnrichment { get; init; } = false;

    /// <summary>
    /// User metadata about the profile, such as external ids, tags, notes, etc.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("metadata")]
    public IReadOnlyDictionary<string, object>? Metadata { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
