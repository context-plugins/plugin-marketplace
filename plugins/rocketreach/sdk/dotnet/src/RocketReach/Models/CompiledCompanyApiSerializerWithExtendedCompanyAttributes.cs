using System.Collections.Generic;
using System.Text.Json.Serialization;
using RocketReach.Core.Models;

namespace RocketReach.Models;

/// <summary>
/// Serializes purchased company fields when looked up.
/// </summary>
public record CompiledCompanyApiSerializerWithExtendedCompanyAttributes
{
    /// <summary>
    /// RocketReach internal unique company ID
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public int? Id { get; init; }

    /// <summary>
    /// Name of the company
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// Web domain for the company
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("domain")]
    public string? Domain { get; init; }

    /// <summary>
    /// Email domain for the company
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("email_domain")]
    public string? EmailDomain { get; init; }

    /// <summary>
    /// Website for the company
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("website_domain")]
    public string? WebsiteDomain { get; init; }

    /// <summary>
    /// Ticker symbol for the company (if available)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ticker_symbol")]
    public string? TickerSymbol { get; init; }

    /// <summary>
    /// Social media links for the company
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("links")]
    public Links? Links { get; init; }

    /// <summary>
    /// Year the company was founded
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("year_founded")]
    public int? YearFounded { get; init; }

    /// <summary>
    /// Street address of the company
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("address")]
    public CompiledCompanyAddress1? Address { get; init; }

    /// <summary>
    /// Phone number for the company
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("phone")]
    public string? Phone { get; init; }

    /// <summary>
    /// Fax number for the company
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("fax")]
    public string? Fax { get; init; }

    /// <summary>
    /// Number of employees working at the company
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("num_employees")]
    public int? NumEmployees { get; init; }

    /// <summary>
    /// Revenue of the company
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("revenue")]
    public int? Revenue { get; init; }

    /// <summary>
    /// List of names of founding investors for the company
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("funding_investors")]
    public IReadOnlyList<string>? FundingInvestors { get; init; }

    /// <summary>
    /// Industry of the company
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("industry")]
    public string? Industry { get; init; }

    /// <summary>
    /// List of SIC codes for the company. Standard Industrial Classification (SIC) codes, are four-digit numerical codes used to categorize businesses by their primary industry
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sic_codes")]
    public IReadOnlyList<int>? SicCodes { get; init; }

    /// <summary>
    /// URL of the RocketReach company profile page for the company
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("rr_profile_url")]
    public string? RrProfileUrl { get; init; }

    /// <summary>
    /// Description of the company
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// List of industry keywords for the company
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("industry_keywords")]
    public IReadOnlyList<string>? IndustryKeywords { get; init; }

    /// <summary>
    /// List of NAICS codes for the company. North American Industry Classification System (NAICS) codes are used to classify businesses by their primary industry
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("naics_codes")]
    public IReadOnlyList<int>? NaicsCodes { get; init; }

    /// <summary>
    /// List of technologies used by the company
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("techstack")]
    public IReadOnlyList<string>? Techstack { get; init; }

    /// <summary>
    /// List of industries the company operates in
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("industries")]
    public IReadOnlyList<string>? Industries { get; init; }

    /// <summary>
    /// List of competitors for the company
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("competitors")]
    public IReadOnlyList<string>? Competitors { get; init; }

    /// <summary>
    /// List of departments within the company
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("departments")]
    public IReadOnlyDictionary<string, int>? Departments { get; init; }

    /// <summary>
    /// Growth rate of the company
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("company_growth")]
    public IReadOnlyList<CompanyQuarterlyGrowth>? CompanyGrowth { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
