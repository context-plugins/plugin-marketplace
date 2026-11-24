using System.Collections.Generic;
using System.Text.Json.Serialization;
using Lusha.Core.Models;

namespace Lusha.Models;

public record CompanyEnrichData
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public double? Id { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("companySize")]
    public CompanySizeLushaApiDocumentationProspectingSearchEnrichApi? CompanySize { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("employees")]
    public string? Employees { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("revenueRange")]
    public IReadOnlyList<double>? RevenueRange { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("fqdn")]
    public string? Fqdn { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("domains")]
    public Domains? Domains { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("logoUrl")]
    public string? LogoUrl { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("industryTags")]
    public IReadOnlyList<string>? IndustryTags { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("stateCode")]
    public string? StateCode { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("social")]
    public Social? Social { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("city")]
    public string? City { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("state")]
    public string? State { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("country")]
    public string? Country { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("countryIso2")]
    public string? CountryIso2 { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("continent")]
    public string? Continent { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("rawLocation")]
    public string? RawLocation { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("coordinates")]
    public IReadOnlyList<double>? Coordinates { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("specialities")]
    public IReadOnlyList<string>? Specialities { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("mainIndustry")]
    public string? MainIndustry { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("subIndustry")]
    public string? SubIndustry { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("linkedinFollowers")]
    public int? LinkedinFollowers { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("emailDomain")]
    public string? EmailDomain { get; init; }

    /// <summary>
    /// All known company locations (not just HQ)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("companyLocations")]
    public IReadOnlyList<CompanyLocation>? CompanyLocations { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("alternativeName")]
    public string? AlternativeName { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("companyType")]
    public string? CompanyType { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lushaPopularityTier")]
    public int? LushaPopularityTier { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("funding")]
    public CompanyFunding? Funding { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("intent")]
    public CompanyIntent? Intent { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("technologies")]
    public IReadOnlyList<CompanyTechnology>? Technologies { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("riskNews")]
    public IReadOnlyList<CompanyNewsSignal>? RiskNews { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("commercialActivityNews")]
    public IReadOnlyList<CompanyNewsSignal>? CommercialActivityNews { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("corporateStrategyNews")]
    public IReadOnlyList<CompanyNewsSignal>? CorporateStrategyNews { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("financialEventsNews")]
    public IReadOnlyList<CompanyNewsSignal>? FinancialEventsNews { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("peopleNews")]
    public IReadOnlyList<CompanyNewsSignal>? PeopleNews { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("marketIntelligenceNews")]
    public IReadOnlyList<CompanyNewsSignal>? MarketIntelligenceNews { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("productActivityNews")]
    public IReadOnlyList<CompanyNewsSignal>? ProductActivityNews { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("surgeInHiring")]
    public IReadOnlyList<CompanySurgeInHiringSignal>? SurgeInHiring { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("surgeInHiringByDepartment")]
    public IReadOnlyList<CompanySurgeInHiringByDepartmentSignal>? SurgeInHiringByDepartment { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("surgeInHiringByLocation")]
    public IReadOnlyList<CompanySurgeInHiringByLocationSignal>? SurgeInHiringByLocation { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("websiteTrafficIncrease")]
    public IReadOnlyList<CompanyWebsiteTrafficSignal>? WebsiteTrafficIncrease { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("websiteTrafficDecrease")]
    public IReadOnlyList<CompanyWebsiteTrafficSignal>? WebsiteTrafficDecrease { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("itSpendIncrease")]
    public IReadOnlyList<CompanyItSpendSignal>? ItSpendIncrease { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("itSpendDecrease")]
    public IReadOnlyList<CompanyItSpendSignal>? ItSpendDecrease { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("headcountIncrease1m")]
    public IReadOnlyList<CompanyHeadcountChangeSignal>? HeadcountIncrease1M { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("headcountDecrease1m")]
    public IReadOnlyList<CompanyHeadcountChangeSignal>? HeadcountDecrease1M { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("headcountIncrease3m")]
    public IReadOnlyList<CompanyHeadcountChangeSignal>? HeadcountIncrease3M { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("headcountDecrease3m")]
    public IReadOnlyList<CompanyHeadcountChangeSignal>? HeadcountDecrease3M { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("headcountIncrease6m")]
    public IReadOnlyList<CompanyHeadcountChangeSignal>? HeadcountIncrease6M { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("headcountDecrease6m")]
    public IReadOnlyList<CompanyHeadcountChangeSignal>? HeadcountDecrease6M { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("headcountIncrease12m")]
    public IReadOnlyList<CompanyHeadcountChangeSignal>? HeadcountIncrease12M { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("headcountDecrease12m")]
    public IReadOnlyList<CompanyHeadcountChangeSignal>? HeadcountDecrease12M { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
