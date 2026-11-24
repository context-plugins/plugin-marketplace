using System.Collections.Generic;
using System.Text.Json.Serialization;
using Lusha.Core.Models;

namespace Lusha.Models;

public record CompanySingleResponseData
{
    /// <summary>
    /// A unique identifier for the Lusha company.
    /// </summary>
    [JsonPropertyName("id")]
    public required double Id { get; init; }

    /// <summary>
    /// A brief description of the company.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// The domain name associated with the company's email addresses.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("domain")]
    public string? Domain { get; init; }

    /// <summary>
    /// The company's employee size range.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("employees")]
    public string? Employees { get; init; }

    /// <summary>
    /// The year the company was founded.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("founded")]
    public string? Founded { get; init; }

    /// <summary>
    /// The fully qualified domain name of the company.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("fqdn")]
    public string? Fqdn { get; init; }

    /// <summary>
    /// The URL of the company's logo.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("logoUrl")]
    public string? LogoUrl { get; init; }

    /// <summary>
    /// The name of the company.
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// LinkedIn followers count for the company
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("linkedinFollowers")]
    public int? LinkedinFollowers { get; init; }

    /// <summary>
    /// Company email domain
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("emailDomain")]
    public string? EmailDomain { get; init; }

    /// <summary>
    /// All known company locations (not just HQ).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("companyLocations")]
    public IReadOnlyList<CompanyLocation>? CompanyLocations { get; init; }

    /// <summary>
    /// Normalized alternative company name
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("alternativeName")]
    public string? AlternativeName { get; init; }

    /// <summary>
    /// Type of company
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("companyType")]
    public string? CompanyType { get; init; }

    /// <summary>
    /// A proprietary ranking used by Lusha to categorize companies based on their popularity in the platform
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lushaPopularityTier")]
    public int? LushaPopularityTier { get; init; }

    /// <summary>
    /// Company size details.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("companySize")]
    public CompanySize? CompanySize { get; init; }

    /// <summary>
    /// The company's revenue range.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("revenueRange")]
    public IReadOnlyList<double>? RevenueRange { get; init; }

    /// <summary>
    /// The main industry of the company.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("mainIndustry")]
    public string? MainIndustry { get; init; }

    /// <summary>
    /// The specific sub-sector within the primary industry.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("subIndustry")]
    public string? SubIndustry { get; init; }

    /// <summary>
    /// Social media links associated with the company.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("social")]
    public CompanySocialResponse1? Social { get; init; }

    /// <summary>
    /// The full address of the company's location.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("address")]
    public string? Address { get; init; }

    /// <summary>
    /// HQ location only. For all company site locations, see companyLocations.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("location")]
    public CompanyLocationResponse? Location { get; init; }

    /// <summary>
    /// LinkedIn industry tags for the company.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("categories")]
    public IReadOnlyList<string>? Categories { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("industryPrimaryGroupDetails")]
    public CompanyIndustryPrimaryGroupDetails? IndustryPrimaryGroupDetails { get; init; }

    /// <summary>
    /// The company's website URL.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("website")]
    public string? Website { get; init; }

    /// <summary>
    /// LinkedIn specialties tags associated with the company.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("specialities")]
    public IReadOnlyList<string>? Specialities { get; init; }

    /// <summary>
    /// Details regarding the company's funding activities.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("funding")]
    public CompanyFunding1? Funding { get; init; }

    /// <summary>
    /// A list of detected intent topics related to the company based on your account's mapped topics.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("intent")]
    public CompanyIntent1? Intent { get; init; }

    /// <summary>
    /// A list of technologies associated with the company.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("technologies")]
    public IReadOnlyList<CompanyTechnology>? Technologies { get; init; }

    /// <summary>
    /// Litigations and security news signals
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("riskNews")]
    public IReadOnlyList<CompanyNewsSignal>? RiskNews { get; init; }

    /// <summary>
    /// Launches, partnerships, and go-to-market activity signals
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("commercialActivityNews")]
    public IReadOnlyList<CompanyNewsSignal>? CommercialActivityNews { get; init; }

    /// <summary>
    /// M&amp;A, restructuring, or strategic direction change signals
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("corporateStrategyNews")]
    public IReadOnlyList<CompanyNewsSignal>? CorporateStrategyNews { get; init; }

    /// <summary>
    /// Funding, IPOs, and financial performance event signals
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("financialEventsNews")]
    public IReadOnlyList<CompanyNewsSignal>? FinancialEventsNews { get; init; }

    /// <summary>
    /// Hiring, layoffs, or leadership change signals
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("peopleNews")]
    public IReadOnlyList<CompanyNewsSignal>? PeopleNews { get; init; }

    /// <summary>
    /// Event participation, recognition, and competitor activity signals
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("marketIntelligenceNews")]
    public IReadOnlyList<CompanyNewsSignal>? MarketIntelligenceNews { get; init; }

    /// <summary>
    /// Product launch, development, and integration news signals
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("productActivityNews")]
    public IReadOnlyList<CompanyNewsSignal>? ProductActivityNews { get; init; }

    /// <summary>
    /// Overall hiring surge signals
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("surgeInHiring")]
    public IReadOnlyList<CompanySurgeInHiringSignal>? SurgeInHiring { get; init; }

    /// <summary>
    /// Department-specific hiring surge signals
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("surgeInHiringByDepartment")]
    public IReadOnlyList<CompanySurgeInHiringByDepartmentSignal>? SurgeInHiringByDepartment { get; init; }

    /// <summary>
    /// Location-specific hiring surge signals
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("surgeInHiringByLocation")]
    public IReadOnlyList<CompanySurgeInHiringByLocationSignal>? SurgeInHiringByLocation { get; init; }

    /// <summary>
    /// Website traffic increase signals
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("websiteTrafficIncrease")]
    public IReadOnlyList<CompanyWebsiteTrafficSignal>? WebsiteTrafficIncrease { get; init; }

    /// <summary>
    /// Website traffic decrease signals
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("websiteTrafficDecrease")]
    public IReadOnlyList<CompanyWebsiteTrafficSignal>? WebsiteTrafficDecrease { get; init; }

    /// <summary>
    /// IT spending increase signals
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("itSpendIncrease")]
    public IReadOnlyList<CompanyItSpendSignal>? ItSpendIncrease { get; init; }

    /// <summary>
    /// IT spending decrease signals
    /// </summary>
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
