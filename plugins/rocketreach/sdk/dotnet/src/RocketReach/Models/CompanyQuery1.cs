using System.Collections.Generic;
using System.Text.Json.Serialization;
using RocketReach.Core.Models;

namespace RocketReach.Models;

/// <summary>
/// Search query object for the request
/// </summary>
public record CompanyQuery1
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("company_tag")]
    public IReadOnlyList<string>? CompanyTag { get; init; }

    /// <summary>
    /// Include companies with these compeitiors
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("competitors")]
    public IReadOnlyList<string>? Competitors { get; init; }

    /// <summary>
    /// Include companies with these descriptions
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public IReadOnlyList<string>? Description { get; init; }

    /// <summary>
    /// Include companies with these domains
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("domain")]
    public IReadOnlyList<string>? Domain { get; init; }

    /// <summary>
    /// Include companies with these email domains
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("email_domain")]
    public IReadOnlyList<string>? EmailDomain { get; init; }

    /// <summary>
    /// Include companies with this number of employees
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("employees")]
    public IReadOnlyList<string>? Employees { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("extended_keyword")]
    public IReadOnlyList<string>? ExtendedKeyword { get; init; }

    /// <summary>
    /// Include companies located in these geographies
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("geo")]
    public IReadOnlyList<string>? Geo { get; init; }

    /// <summary>
    /// Include growth numbers for specific departments and time ranges.
    /// &lt;b&gt;Format:&lt;/b&gt; <c>min_percentage_growth-max_percentage_growth::Department,TimeRange</c>
    /// * min_percentage_growth: Minimum growth percentage to filter companies
    /// * max_percentage_growth: Maximum growth percentage to filter companies
    /// * Department: Name of the company department (e.g., Engineering, Sales)
    /// * TimeRange: Duration for the growth metric (e.g., six_months, one_year)
    /// - Example: <c>['5-30::Engineering,six_months']</c>
    /// - Example: <c>['-10--20::Sales,one_year']</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("growth")]
    public IReadOnlyList<string>? Growth { get; init; }

    /// <summary>
    /// Include companies with these RocketReach company IDs
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public IReadOnlyList<string>? Id { get; init; }

    /// <summary>
    /// Include companies focused in these industries
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("industry")]
    public IReadOnlyList<string>? Industry { get; init; }

    /// <summary>
    /// Include companies focused in industries with these keywords
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("industry_keywords")]
    public IReadOnlyList<string>? IndustryKeywords { get; init; }

    /// <summary>
    /// Include companies focused in industries with these tags
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("industry_tags")]
    public IReadOnlyList<string>? IndustryTags { get; init; }

    /// <summary>
    /// Search across 37,000 intent topics found <see href="https://docs.google.com/spreadsheets/d/1nnk8ZOLr9GUzrPNy1pG_N_gVIhDpkc5XjE3Hh4J8M00/edit?gid=761283207#gid=761283207">here</see>. Intent is only available on certain plans. Please reach out to our team to learn more.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("intent")]
    public IReadOnlyList<string>? Intent { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("is_primary")]
    public IReadOnlyList<string>? IsPrimary { get; init; }

    /// <summary>
    /// Hiring signals that identify companies that are actively building out specific departments. Full list of categories <see href="https://docs.google.com/spreadsheets/d/1EZPVnOftbHNwDm0aXjiJ79dSpqcZ4JLnrNJPZxKXi5Q/edit?gid=2100271042#gid=2100271042">here</see>.
    /// - Example: <c>['Accounting Roles::one_month']</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("job_posting_signal")]
    public IReadOnlyList<string>? JobPostingSignal { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("keyword")]
    public IReadOnlyList<string>? Keyword { get; init; }

    /// <summary>
    /// Include companies listed with these links
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("link")]
    public IReadOnlyList<string>? Link { get; init; }

    /// <summary>
    /// Include companies located in these locations
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("location")]
    public IReadOnlyList<string>? Location { get; init; }

    /// <summary>
    /// Include companies with these NAICS codes
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("naics_code")]
    public IReadOnlyList<string>? NaicsCode { get; init; }

    /// <summary>
    /// Include companies with these names
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public IReadOnlyList<string>? Name { get; init; }

    /// <summary>
    /// Search on news events within the 25 categories listed <see href="https://docs.google.com/spreadsheets/d/1EZPVnOftbHNwDm0aXjiJ79dSpqcZ4JLnrNJPZxKXi5Q/edit?gid=577464958#gid=577464958"">here</see>.
    /// - Example: <c>['Funding::one_month']</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("news_signal")]
    public IReadOnlyList<string>? NewsSignal { get; init; }

    /// <summary>
    /// news_timestamp deprecated, please use <c>news_signal</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("news_timestamp")]
    public IReadOnlyList<string>? NewsTimestamp { get; init; }

    /// <summary>
    /// Include companies with these phone numbers
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("phone")]
    public IReadOnlyList<string>? Phone { get; init; }

    /// <summary>
    /// Include companies focues in these primary industries
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("primary_industry")]
    public IReadOnlyList<string>? PrimaryIndustry { get; init; }

    /// <summary>
    /// Include companies that are publically traded
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("publicly_traded")]
    public IReadOnlyList<string>? PubliclyTraded { get; init; }

    /// <summary>
    /// Include companies with these revenue values
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("revenue")]
    public IReadOnlyList<string>? Revenue { get; init; }

    /// <summary>
    /// Include companies with these SIC codes
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sic_code")]
    public IReadOnlyList<string>? SicCode { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("simplified_keyword")]
    public IReadOnlyList<string>? SimplifiedKeyword { get; init; }

    /// <summary>
    /// Include companies working in these techstacks
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("techstack")]
    public IReadOnlyList<string>? Techstack { get; init; }

    /// <summary>
    /// Include companies who have raised this amount of capital
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("total_funding")]
    public IReadOnlyList<string>? TotalFunding { get; init; }

    /// <summary>
    /// Include companies with websites in these categories
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("website_category")]
    public IReadOnlyList<string>? WebsiteCategory { get; init; }

    /// <summary>
    /// Include companies with these website URLs
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("website_url")]
    public IReadOnlyList<string>? WebsiteUrl { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
