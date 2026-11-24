using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Lusha.Core.Models;

namespace Lusha.Models;

public record V3SearchAndEnrichCompanyResult
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public string? Id { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("alternativeName")]
    public string? AlternativeName { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("domain")]
    public string? Domain { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("alternativeDomains")]
    public IReadOnlyList<string>? AlternativeDomains { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("companyType")]
    public string? CompanyType { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("yearFounded")]
    public double? YearFounded { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("employeeCount")]
    public EmployeeCount? EmployeeCount { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("industry")]
    public string? Industry { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("subIndustry")]
    public string? SubIndustry { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("specialities")]
    public IReadOnlyList<string>? Specialities { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("industryTags")]
    public IReadOnlyList<string>? IndustryTags { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sicCodes")]
    public IReadOnlyList<V3SicCode>? SicCodes { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("naicsCodes")]
    public IReadOnlyList<V3NaicsCode>? NaicsCodes { get; init; }

    /// <summary>
    /// Free field. Short description of what the company sells or does.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("companyOffering")]
    public string? CompanyOffering { get; init; }

    /// <summary>
    /// Free field. Primary domain used for company email addresses.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("emailDomain")]
    public string? EmailDomain { get; init; }

    /// <summary>
    /// Free field. Up to 2 secondary industry classifications beyond the primary <c>industry</c>/<c>subIndustry</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("additionalIndustries")]
    [MaxLength(2)]
    public IReadOnlyList<AdditionalIndustry>? AdditionalIndustries { get; init; }

    /// <summary>
    /// Revealed via reveal: ["estimatedAnnualItSpend"] in Enrich Companies. Charged 1 credit when non-null.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("estimatedAnnualItSpend")]
    public EstimatedAnnualItSpend? EstimatedAnnualItSpend { get; init; }

    /// <summary>
    /// Revealed via reveal: ["monthlyWebsiteTraffic"] in Enrich Companies. Charged 1 credit when non-null.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("monthlyWebsiteTraffic")]
    public MonthlyWebsiteTraffic? MonthlyWebsiteTraffic { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("location")]
    public V3CompanyLocation? Location { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("additionalLocations")]
    public IReadOnlyList<V3CompanyLocation>? AdditionalLocations { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("socialLinks")]
    public SocialLinks1? SocialLinks { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("linkedinFollowers")]
    public double? LinkedinFollowers { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("revenueRange")]
    public RevenueRange? RevenueRange { get; init; }

    /// <summary>
    /// Funding payload when present
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("funding")]
    public object? Funding { get; init; }

    /// <summary>
    /// Intent payload when present
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("intent")]
    public object? Intent { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("technologies")]
    public IReadOnlyList<string>? Technologies { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("popularityTier")]
    public double? PopularityTier { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("logoUrl")]
    public string? LogoUrl { get; init; }

    /// <summary>
    /// Breakdown of employees by department. Revealed via <c>reveal: ["employeesByDepartment"]</c> in Enrich Companies.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("employeesByDepartment")]
    public IReadOnlyList<EmployeesByDepartment>? EmployeesByDepartment { get; init; }

    /// <summary>
    /// Breakdown of employees by country and state. Revealed via <c>reveal: ["employeesByLocation"]</c> in Enrich Companies.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("employeesByLocation")]
    public IReadOnlyList<EmployeesByLocation>? EmployeesByLocation { get; init; }

    /// <summary>
    /// Breakdown of employees by seniority level. Revealed via <c>reveal: ["employeesBySeniority"]</c> in Enrich Companies.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("employeesBySeniority")]
    public IReadOnlyList<EmployeesBySeniority>? EmployeesBySeniority { get; init; }

    /// <summary>
    /// List of competitor companies. Revealed via <c>reveal: ["competitors"]</c> in Enrich Companies. Use Enrich Companies with the returned IDs to get full firmographic data on each competitor.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("competitors")]
    public IReadOnlyList<Competitor>? Competitors { get; init; }

    /// <summary>
    /// Company business model classification (e.g. B2B, B2C)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("businessModel")]
    public IReadOnlyList<string>? BusinessModel { get; init; }

    /// <summary>
    /// Company phone number
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("phone")]
    public string? Phone { get; init; }

    /// <summary>
    /// Company contact email address
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("email")]
    public string? Email { get; init; }

    /// <summary>
    /// Keywords associated with the company (normalized from specialities and description)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("keywords")]
    public IReadOnlyList<string>? Keywords { get; init; }

    /// <summary>
    /// Normalized version of the specialities list
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("specialitiesRefactored")]
    public IReadOnlyList<string>? SpecialitiesRefactored { get; init; }

    /// <summary>
    /// Per-item error in a batch response
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("error")]
    public V3ItemError? Error { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("clientReferenceId")]
    public string? ClientReferenceId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
