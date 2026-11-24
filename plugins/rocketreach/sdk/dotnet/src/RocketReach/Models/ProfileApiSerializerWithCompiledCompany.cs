using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using RocketReach.Core.Models;

namespace RocketReach.Models;

public record ProfileApiSerializerWithCompiledCompany
{
    /// <summary>
    /// Profile List this contact was added to.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("profile_list")]
    public ProfileListApi? ProfileList { get; init; }

    /// <summary>
    /// RocketReach internal unique profile ID
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public int? Id { get; init; }

    /// <summary>
    /// Status of the profile lookup. Either "complete", "progress", "searching" or "not queued"
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("status")]
    public string? Status { get; init; }

    /// <summary>
    /// Name of the profile
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    [MaxLength(128)]
    public string? Name { get; init; }

    /// <summary>
    /// profile_pic deprecated
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("profile_pic")]
    public string? ProfilePic { get; init; }

    /// <summary>
    /// LinkedIn URL of the profile
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("linkedin_url")]
    public string? LinkedinUrl { get; init; }

    /// <summary>
    /// Number of LinkedIn connections for this profile
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("connections")]
    public int? Connections { get; init; }

    /// <summary>
    /// Social media links for the profile
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("links")]
    public IReadOnlyDictionary<string, object>? Links { get; init; }

    /// <summary>
    /// Location of the profile
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("location")]
    [MaxLength(256)]
    public string? Location { get; init; }

    /// <summary>
    /// Current job title of the profile
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("current_title")]
    public string? CurrentTitle { get; init; }

    /// <summary>
    /// Current employer of the profile
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("current_employer")]
    public string? CurrentEmployer { get; init; }

    /// <summary>
    /// RocketReach internal unique company ID
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("current_employer_id")]
    public int? CurrentEmployerId { get; init; }

    /// <summary>
    /// This person's company's domain name.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("current_employer_domain")]
    public string? CurrentEmployerDomain { get; init; }

    /// <summary>
    /// This person's company's website.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("current_employer_website")]
    public string? CurrentEmployerWebsite { get; init; }

    /// <summary>
    /// This person's company's LinkedIn URL.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("current_employer_linkedin_url")]
    public string? CurrentEmployerLinkedinUrl { get; init; }

    /// <summary>
    /// This person's company's industry.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("current_employer_industry")]
    public string? CurrentEmployerIndustry { get; init; }

    /// <summary>
    /// List of professional experiences for the profile
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("job_history")]
    public IReadOnlyList<JobHistoryApiCompiledCompany>? JobHistory { get; init; }

    /// <summary>
    /// List of educational experiences for the profile
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("education")]
    public IReadOnlyList<EducationApi>? Education { get; init; }

    /// <summary>
    /// List of skills for the profile
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("skills")]
    public IReadOnlyList<string>? Skills { get; init; }

    /// <summary>
    /// Year of birth of the profile
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("birth_year")]
    public int? BirthYear { get; init; }

    /// <summary>
    /// Latitude of the region of the profile
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("region_latitude")]
    public double? RegionLatitude { get; init; }

    /// <summary>
    /// Longitude of the region of the profile
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("region_longitude")]
    public double? RegionLongitude { get; init; }

    /// <summary>
    /// City of the profile
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("city")]
    [MaxLength(128)]
    public string? City { get; init; }

    /// <summary>
    /// Region of the profile
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("region")]
    [MaxLength(3)]
    public string? Region { get; init; }

    /// <summary>
    /// Country of the profile
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("country")]
    public string? Country { get; init; }

    /// <summary>
    /// Country code of the profile
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("country_code")]
    [MaxLength(2)]
    public string? CountryCode { get; init; }

    /// <summary>
    /// List of NPI data objects for the profile
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("npi_data")]
    public NpiData? NpiData { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tags")]
    public string? Tags { get; init; }

    /// <summary>
    /// Indicates if cached emails were returned in the initial synchronous response. If false, email fields will be null until the lookup is complete.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("return_cached_emails")]
    public bool? ReturnCachedEmails { get; init; }

    /// <summary>
    /// Indicates if the LinkedIn profile exists or is no longer available.
    /// * <c>True</c> = Active (as of last update)
    /// * <c>False</c> = Unavailable (as of last update)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("linkedin_url_active")]
    public bool? LinkedinUrlActive { get; init; }

    /// <summary>
    /// Recommended email for the profile
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("recommended_email")]
    public string? RecommendedEmail { get; init; }

    /// <summary>
    /// Recommended personal email for the profile
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("recommended_personal_email")]
    public string? RecommendedPersonalEmail { get; init; }

    /// <summary>
    /// Recommended professional email for the profile
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("recommended_professional_email")]
    public string? RecommendedProfessionalEmail { get; init; }

    /// <summary>
    /// Current work email for the profile
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("current_work_email")]
    public string? CurrentWorkEmail { get; init; }

    /// <summary>
    /// Current personal email for the profile
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("current_personal_email")]
    public string? CurrentPersonalEmail { get; init; }

    /// <summary>
    /// List of email objects for the profile
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("emails")]
    public IReadOnlyList<ProfileEmailApi>? Emails { get; init; }

    /// <summary>
    /// List of phone number objects for the profile
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("phones")]
    public IReadOnlyList<ProfilePhoneApi>? Phones { get; init; }

    /// <summary>
    /// Object representing the employer of the profile
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("company")]
    public CompiledCompanyApi2? Company { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
