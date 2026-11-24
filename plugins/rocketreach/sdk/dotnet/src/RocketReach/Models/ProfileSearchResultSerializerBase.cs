using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using RocketReach.Core.Models;
using RocketReach.Models.Enums;

namespace RocketReach.Models;

public record ProfileSearchResultSerializerBase
{
    /// <summary>
    /// RocketReach internal unique profile ID
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public int? Id { get; init; }

    /// <summary>
    /// Status of the profile lookup
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("status")]
    public StatusEnum? Status { get; init; }

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
    /// Social media links for the profile
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("links")]
    public IReadOnlyDictionary<string, object>? Links { get; init; }

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
    /// Location of the profile
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("location")]
    [MaxLength(256)]
    public string? Location { get; init; }

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
    /// Country code of the profile
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
    /// Domain for the employer of the profile
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("current_employer_domain")]
    public string? CurrentEmployerDomain { get; init; }

    /// <summary>
    /// Website for the employer of the profile
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("current_employer_website")]
    public string? CurrentEmployerWebsite { get; init; }

    /// <summary>
    /// Preview contact data for the profile
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("teaser")]
    public Teaser? Teaser { get; init; }

    /// <summary>
    /// Year of birth of the profile
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("birth_year")]
    public int? BirthYear { get; init; }

    /// <summary>
    /// RocketReach internal unique company ID
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("current_employer_id")]
    public int? CurrentEmployerId { get; init; }

    /// <summary>
    /// LinkedIn URL for the employer of the profile
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("current_employer_linkedin_url")]
    public string? CurrentEmployerLinkedinUrl { get; init; }

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
    /// Returns True if this profile is blocked by a suppression list filter
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("suppressed")]
    public string? Suppressed { get; init; }

    /// <summary>
    /// List of NPI data objects for the profile
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("npi_data")]
    public TypedDict? NpiData { get; init; }

    /// <summary>
    /// Timestamp of the last update for the profile
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("update_time")]
    public DateTimeOffset? UpdateTime { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
