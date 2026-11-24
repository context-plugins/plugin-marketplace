using System;
using System.Text.Json.Serialization;
using RocketReach.Core.Models;

namespace RocketReach.Models;

public record JobHistoryApiCompiledCompany
{
    /// <summary>
    /// Start date of the work experience
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("start_date")]
    public string? StartDate { get; init; }

    /// <summary>
    /// End date of the work experience (Present if experience is current)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("end_date")]
    public string? EndDate { get; init; } = "Present";

    /// <summary>
    /// Name of the company
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("company")]
    public string? Company { get; init; }

    /// <summary>
    /// Name of the company
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("company_name")]
    public string? CompanyName { get; init; }

    /// <summary>
    /// RocketReach internal unique company ID
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("company_id")]
    public int? CompanyId { get; init; }

    /// <summary>
    /// Linkedin URL of the company
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("company_linkedin_url")]
    public string? CompanyLinkedinUrl { get; init; }

    /// <summary>
    /// City of the company's location
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("company_city")]
    public string? CompanyCity { get; init; }

    /// <summary>
    /// Region of the company's location
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("company_region")]
    public string? CompanyRegion { get; init; }

    /// <summary>
    /// Country code of the company's location
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("company_country_code")]
    public string? CompanyCountryCode { get; init; }

    /// <summary>
    /// Department of the work experience
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("department")]
    public string? Department { get; init; }

    /// <summary>
    /// Job title of the work experience
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("title")]
    public string? Title { get; init; }

    /// <summary>
    /// Highest level of the work experience
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("highest_level")]
    public string? HighestLevel { get; init; }

    /// <summary>
    /// Description of the work experience
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// Timestamp of the last update of this work experience
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("last_updated")]
    public DateTimeOffset? LastUpdated { get; init; }

    /// <summary>
    /// Sub-department of the work experience
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sub_department")]
    public string? SubDepartment { get; init; }

    /// <summary>
    /// True if the experience is the profile's current role, False otherwise
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("is_current")]
    public bool? IsCurrent { get; init; } = false;

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
