using System.Collections.Generic;
using System.Text.Json.Serialization;
using RocketReach.Core.Models;

namespace RocketReach.Models;

public record PersonQuery
{
    /// <summary>
    /// Include profiles with all of these skills (Uses <c>AND</c> logic).
    /// - Example: <c>['python', 'sql', 'machine learning']</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("all_skills")]
    public IReadOnlyList<string>? AllSkills { get; init; }

    /// <summary>
    /// Include profiles with employers who have these competitors
    /// - Example: <c>['homedepot.com']</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("company_competitors")]
    public IReadOnlyList<string>? CompanyCompetitors { get; init; }

    /// <summary>
    /// Include profiles with employers located in these country codes
    /// - Example: <c>['US']</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("company_country_code")]
    public IReadOnlyList<string>? CompanyCountryCode { get; init; }

    /// <summary>
    /// Include profiles with employers who have these company domains
    /// - Example: <c>['rocketreach.co']</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("company_domain")]
    public IReadOnlyList<string>? CompanyDomain { get; init; }

    /// <summary>
    /// Include profiles with employers who have these company emails
    /// - Example: <c>['info@rocketreach.co']</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("company_email")]
    public IReadOnlyList<string>? CompanyEmail { get; init; }

    /// <summary>
    /// Include profiles with employers below this amount of funding
    /// - Example: <c>['50000000']</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("company_funding_max")]
    public IReadOnlyList<string>? CompanyFundingMax { get; init; }

    /// <summary>
    /// Include profiles with employers above this amount of funding
    /// - Example: <c>['1000000']</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("company_funding_min")]
    public IReadOnlyList<string>? CompanyFundingMin { get; init; }

    /// <summary>
    /// Include results matching company_geo.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("company_geo")]
    public IReadOnlyList<string>? CompanyGeo { get; init; }

    /// <summary>
    /// Include profiles with employed by these company IDs
    /// - Example: <c>['123456']</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("company_id")]
    public IReadOnlyList<string>? CompanyId { get; init; }

    /// <summary>
    /// Include profiles with employers in these industries. See the full list of industries <see href="https://docs.google.com/spreadsheets/d/1cYz3FwtNEWW7z9otNNZRIILQ63_hM1LQ9SgsXWayaaI/edit?gid=0#gid=0">here</see>.
    /// - Example: <c>['Software Engineering']</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("company_industry")]
    public IReadOnlyList<string>? CompanyIndustry { get; init; }

    /// <summary>
    /// Include profiles with employers with these industry keywords
    /// - Example: <c>['SaaS', 'B2B']</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("company_industry_keywords")]
    public IReadOnlyList<string>? CompanyIndustryKeywords { get; init; }

    /// <summary>
    /// Search across 37,000 intent topics found <see href="https://docs.google.com/spreadsheets/d/1nnk8ZOLr9GUzrPNy1pG_N_gVIhDpkc5XjE3Hh4J8M00/edit?gid=761283207#gid=761283207">here</see>. Intent is only available on certain plans. Please reach out to our team to learn more..
    /// - Example: <c>['hiring']</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("company_intent")]
    public IReadOnlyList<string>? CompanyIntent { get; init; }

    /// <summary>
    /// Hiring signals that identify companies that are actively building out specific departments. Full list of categories <see href="https://docs.google.com/spreadsheets/d/1EZPVnOftbHNwDm0aXjiJ79dSpqcZ4JLnrNJPZxKXi5Q/edit?gid=2100271042#gid=2100271042">here</see>.
    /// - Example: <c>['Accounting Roles::one_month']</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("company_job_posting_signal")]
    public IReadOnlyList<string>? CompanyJobPostingSignal { get; init; }

    /// <summary>
    /// Transforms [ company_list ] search terms into a list of [ company_id ] search terms.
    /// - Example: <c>['Example Company List']</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("company_list")]
    public IReadOnlyList<string>? CompanyList { get; init; }

    /// <summary>
    /// Include results matching company_list_id.
    /// - Example: <c>['12345']</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("company_list_id")]
    public IReadOnlyList<string>? CompanyListId { get; init; }

    /// <summary>
    /// Include profiles with employers with these NAICS codes
    /// - Example: <c>['541330', '541512']</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("company_naics_code")]
    public IReadOnlyList<string>? CompanyNaicsCode { get; init; }

    /// <summary>
    /// Include profiles employed by these company names
    /// - Example: <c>['RocketReach']</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("company_name")]
    public IReadOnlyList<string>? CompanyName { get; init; }

    /// <summary>
    /// Search on news events within the 25 categories listed <see href="https://docs.google.com/spreadsheets/d/1EZPVnOftbHNwDm0aXjiJ79dSpqcZ4JLnrNJPZxKXi5Q/edit?gid=577464958#gid=577464958"">here</see>.
    /// - Example: <c>['Funding::one_month']</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("company_news_signal")]
    public IReadOnlyList<string>? CompanyNewsSignal { get; init; }

    /// <summary>
    /// company_news_timestamp deprecated, please use <c>company_news_signal</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("company_news_timestamp")]
    public IReadOnlyList<string>? CompanyNewsTimestamp { get; init; }

    /// <summary>
    /// Include results matching company_publicly_traded.
    /// - Example: <c>['true']</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("company_publicly_traded")]
    public IReadOnlyList<string>? CompanyPubliclyTraded { get; init; }

    /// <summary>
    /// Include profiles with employers with these revenue values.
    /// - Example: <c>['10000000-50000000']</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("company_revenue")]
    public IReadOnlyList<string>? CompanyRevenue { get; init; }

    /// <summary>
    /// Include profiles with employers with these SIC codes.
    /// - Example: <c>['7372']</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("company_sic_code")]
    public IReadOnlyList<string>? CompanySicCode { get; init; }

    /// <summary>
    /// Include profiles with employers with these sizes.
    /// - Example: <c>['51-200']</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("company_size")]
    public IReadOnlyList<string>? CompanySize { get; init; }

    /// <summary>
    /// Include profiles with employers with these company tags.
    /// - Example: <c>['unicorn']</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("company_tag")]
    public IReadOnlyList<string>? CompanyTag { get; init; }

    /// <summary>
    /// Include profiles with employers with these website URLs.
    /// - Example: <c>['rocketreach.co']</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("company_website_url")]
    public IReadOnlyList<string>? CompanyWebsiteUrl { get; init; }

    /// <summary>
    /// Include profiles with these connections.
    /// - Example: <c>['500+']</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("connections")]
    public IReadOnlyList<string>? Connections { get; init; }

    /// <summary>
    /// Include profiles with these contact methods Options are: <c>mobile</c>, <c>phone</c>, <c>personal email</c>, and <c>work email</c>. Available with both AND and OR logic.
    /// - Example: <c>["work email OR personal email"]</c> or <c>["mobile AND personal email"]</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("contact_method")]
    public IReadOnlyList<string>? ContactMethod { get; init; }

    /// <summary>
    /// Include results matching current or previous job titles.
    /// - Example: <c>['VP of Sales']</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("current_or_previous_title")]
    public IReadOnlyList<string>? CurrentOrPreviousTitle { get; init; }

    /// <summary>
    /// Include profiles with these current job titles.
    /// - Example: <c>['Product Manager']</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("current_title")]
    public IReadOnlyList<string>? CurrentTitle { get; init; }

    /// <summary>
    /// Include profiles with these degrees.
    /// - Example: <c>['Bachelors']</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("degree")]
    public IReadOnlyList<string>? Degree { get; init; }

    /// <summary>
    /// Include profiles in these company departments. See the full list of departments <see href="https://docs.google.com/spreadsheets/d/1EZPVnOftbHNwDm0aXjiJ79dSpqcZ4JLnrNJPZxKXi5Q/edit?gid=0#gid=0">here</see>.
    /// - Example: <c>['Product Management']</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("department")]
    public IReadOnlyList<string>? Department { get; init; }

    /// <summary>
    /// Include profiles with these descriptions.
    /// - Example: <c>['Experienced software engineer with a focus on backend development']</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public IReadOnlyList<string>? Description { get; init; }

    /// <summary>
    /// Include profiles with these domains.
    /// - Example: <c>['rocketreach.co']</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("domain")]
    public IReadOnlyList<string>? Domain { get; init; }

    /// <summary>
    /// Include profiles with these emails.
    /// - Example: <c>['john.doe@rocketreach.co']</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("email")]
    public IReadOnlyList<string>? Email { get; init; }

    /// <summary>
    /// Specifies the minimum email confidence grade that a profile must have. Note: Email grades may be revalidated during lookup. As a result, you may occasionally see profiles whose email grade no longer matches the grade filter used in your search. Use the following format to specify personal or professional email grades: <c>&lt;grade&gt;::&lt;modifier&gt;</c>
    /// - Allowed Grades: A, A-, or B.
    /// - Allowed Modifiers: professional only, personal only
    /// - Example: <c>'A-'</c> or <c>'A-::professional only'</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("email_grade")]
    public string? EmailGrade { get; init; }

    /// <summary>
    /// Include profiles employed by these companies.
    /// - Example: <c>['RocketReach']</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("employer")]
    public IReadOnlyList<string>? Employer { get; init; }

    /// <summary>
    /// Include profiles located in these geographies.
    /// - Example: <c>['North America']</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("geo")]
    public IReadOnlyList<string>? Geo { get; init; }

    /// <summary>
    /// Include growth numbers for specific departments and time ranges.
    /// &lt;b&gt;Format:&lt;/b&gt; <c>min_percentage_growth-max_percentage_growth::Department,TimeRange</c>
    /// * min_percentage_growth: Minimum growth percentage to filter profiles
    /// * max_percentage_growth: Maximum growth percentage to filter profiles
    /// * Department: Name of the company department (e.g., Engineering, Sales)
    /// * TimeRange: Duration for the growth metric (e.g., six_months, one_year)
    /// - Example: <c>['5-30::Engineering,six_months']</c>
    /// - Example: <c>['-10--20::Sales,one_year']</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("growth")]
    public IReadOnlyList<string>? Growth { get; init; }

    /// <summary>
    /// Include results matching handle.
    /// - Example: <c>['johndoe']</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("handle")]
    public IReadOnlyList<string>? Handle { get; init; }

    /// <summary>
    /// Include profiles with these health credentials. Only available on certain plans. Please reach out to our team to learn more.
    /// - Example: <c>['MD', 'RN', 'PhD']</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("health_credentials")]
    public IReadOnlyList<string>? HealthCredentials { get; init; }

    /// <summary>
    /// Include profiles with these health licenses. Only available on certain plans. Please reach out to our team to learn more.
    /// - Example: <c>['MA12345']</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("health_license")]
    public IReadOnlyList<string>? HealthLicense { get; init; }

    /// <summary>
    /// Include profiles with these health NPIs. Only available on certain plans. Please reach out to our team to learn more.
    /// - Example: <c>['1234567890']</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("health_npi")]
    public IReadOnlyList<string>? HealthNpi { get; init; }

    /// <summary>
    /// Include profiles with these health specializations. Only available on certain plans. Please reach out to our team to learn more.
    /// - Example: <c>['Cardiology']</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("health_specialization")]
    public IReadOnlyList<string>? HealthSpecialization { get; init; }

    /// <summary>
    /// Include profiles with these RocketReach Profile IDs.
    /// - Example: <c>['123456']</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public IReadOnlyList<string>? Id { get; init; }

    /// <summary>
    /// job_change_range_days deprecated, please use <c>job_change_signal</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("job_change_range_days")]
    public IReadOnlyList<string>? JobChangeRangeDays { get; init; }

    /// <summary>
    /// Detect when a contact changes companies or gets promoted (Time window options: one_week, one_month, three_months)
    /// - Example: <c>['Company Change::one_month']</c>
    /// - Example: <c>['Promotion::one_week']</c>
    /// - Example: <c>['Company Change AND Promotion::three_months']</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("job_change_signal")]
    public IReadOnlyList<string>? JobChangeSignal { get; init; }

    /// <summary>
    /// Include results matching keyword.
    /// - Example: <c>['data enrichment']</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("keyword")]
    public string? Keyword { get; init; }

    /// <summary>
    /// Include results matching keywords.
    /// - Example: <c>['sales prospecting', 'data enrichment']</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("keywords")]
    public string? Keywords { get; init; }

    /// <summary>
    /// Include results matching link.
    /// - Example: <c>['https://linkedin.com/in/johndoe']</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("link")]
    public IReadOnlyList<string>? Link { get; init; }

    /// <summary>
    /// Include profiles with these majors.
    /// - Example: <c>['Computer Science', 'Biology']</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("major")]
    public IReadOnlyList<string>? Major { get; init; }

    /// <summary>
    /// Include profiles at these management levels. See the full list of management levels <see href="https://docs.google.com/spreadsheets/d/1EZPVnOftbHNwDm0aXjiJ79dSpqcZ4JLnrNJPZxKXi5Q/edit?gid=0#gid=0">here</see>.
    /// - Example: <c>['Director']</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("management_levels")]
    public IReadOnlyList<string>? ManagementLevels { get; init; }

    /// <summary>
    /// Include profiles with these names.
    /// - Example: <c>['John Doe']</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public IReadOnlyList<string>? Name { get; init; }

    /// <summary>
    /// Include profiles with these phone numbers.
    /// - Example: <c>['+15555555555']</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("phone")]
    public IReadOnlyList<string>? Phone { get; init; }

    /// <summary>
    /// Include results matching phone_grade.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("phone_grade")]
    public IReadOnlyList<string>? PhoneGrade { get; init; }

    /// <summary>
    /// Include profiles who were previously employed at these RocketReach
    /// company IDs.
    /// - Example: <c>['123456']</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("previous_company_id")]
    public IReadOnlyList<string>? PreviousCompanyId { get; init; }

    /// <summary>
    /// Include profiles who were previously employed at these companies.
    /// - Example: <c>['Google']</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("previous_employer")]
    public IReadOnlyList<string>? PreviousEmployer { get; init; }

    /// <summary>
    /// Include results matching previous_title.
    /// - Example: <c>['Software Engineer']</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("previous_title")]
    public IReadOnlyList<string>? PreviousTitle { get; init; }

    /// <summary>
    /// Include profiles who attended these schools.
    /// - Example: <c>['Stanford University']</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("school")]
    public IReadOnlyList<string>? School { get; init; }

    /// <summary>
    /// Include profiles listed with any of these skills (Uses <c>OR</c> logic).
    /// - Example: <c>['Python', 'SQL']</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("skills")]
    public IReadOnlyList<string>? Skills { get; init; }

    /// <summary>
    /// Include profiles located in these states.
    /// - Example: <c>['MA']</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("state")]
    public IReadOnlyList<string>? State { get; init; }

    /// <summary>
    /// Include results that have been updated since the specified date.
    /// - Example: <c>['2025-01-01']</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("update_time")]
    public IReadOnlyList<string>? UpdateTime { get; init; }

    /// <summary>
    /// Include profiles with this many years of experience.
    /// - Example: <c>['10']</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("years_experience")]
    public IReadOnlyList<string>? YearsExperience { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
