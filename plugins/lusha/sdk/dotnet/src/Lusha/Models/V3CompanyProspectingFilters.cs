using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Lusha.Core.Models;
using Lusha.Core.Validation.Attributes;
using Lusha.Models.Enums;

namespace Lusha.Models;

public record V3CompanyProspectingFilters
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("names")]
    public IReadOnlyList<string>? Names { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("domains")]
    public IReadOnlyList<string>? Domains { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ids")]
    public IReadOnlyList<string>? Ids { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("searchText")]
    [MaxLength(200)]
    public string? SearchText { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("locations")]
    public IReadOnlyList<V3Location>? Locations { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sizes")]
    public IReadOnlyList<V3Range>? Sizes { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("revenues")]
    public IReadOnlyList<V3Range>? Revenues { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("technologies")]
    public IReadOnlyList<string>? Technologies { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("technologiesCondition")]
    public TechnologiesCondition? TechnologiesCondition { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("mainIndustriesIds")]
    public IReadOnlyList<int>? MainIndustriesIds { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("subIndustriesIds")]
    public IReadOnlyList<int>? SubIndustriesIds { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("intentTopics")]
    public IReadOnlyList<string>? IntentTopics { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("intentTopicsCondition")]
    public IntentTopicsCondition? IntentTopicsCondition { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("intentMinScore")]
    [Minimum(1)]
    [Maximum(100)]
    public int? IntentMinScore { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("intentMaxScore")]
    [Minimum(1)]
    [Maximum(100)]
    public int? IntentMaxScore { get; init; }

    /// <summary>
    /// Recommended over <c>intentTopicsCondition</c>. <c>any</c>/<c>all</c> are aliases for <c>or</c>/<c>and</c>. <c>intentTopicsCondition</c> is not deprecated and remains accepted.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("intentTopicsOperator")]
    public IntentTopicsOperator? IntentTopicsOperator { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("topicCountThreshold")]
    public IReadOnlyList<V3Range>? TopicCountThreshold { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sicCodes")]
    public IReadOnlyList<string>? SicCodes { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("naicsCodes")]
    public IReadOnlyList<string>? NaicsCodes { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("signals")]
    public Signals1? Signals { get; init; }

    /// <summary>
    /// Filter by year the company was founded. Supports <c>min</c> (greater than or equal) and <c>max</c> (less than or equal) range operators.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("foundedYear")]
    public IReadOnlyList<FoundedYear>? FoundedYear { get; init; }

    /// <summary>
    /// Filter by business model. Accepted values: B2B, B2C, B2G.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("businessModel")]
    public IReadOnlyList<BusinessModel>? BusinessModel { get; init; }

    /// <summary>
    /// Filter by company type. Accepted values: Government, Private Company, Public Company, Educational, Non Profit, Self Employed.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("companyType")]
    public IReadOnlyList<CompanyType>? CompanyType { get; init; }

    /// <summary>
    /// Filter by company LinkedIn URLs.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("linkedinUrls")]
    public IReadOnlyList<string>? LinkedinUrls { get; init; }

    /// <summary>
    /// Filter by keywords associated with the company.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("keywords")]
    public IReadOnlyList<string>? Keywords { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("specialities")]
    public IReadOnlyList<string>? Specialities { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("exactSpecialities")]
    public IReadOnlyList<string>? ExactSpecialities { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("exactKeywords")]
    public IReadOnlyList<string>? ExactKeywords { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("keywordsSearchFields")]
    public IReadOnlyList<string>? KeywordsSearchFields { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("previousCompanyDomains")]
    public IReadOnlyList<string>? PreviousCompanyDomains { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("previousCompanyNames")]
    public IReadOnlyList<string>? PreviousCompanyNames { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("geographicDetails")]
    public IReadOnlyList<GeographicDetail>? GeographicDetails { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("locationsZipcodes")]
    public IReadOnlyList<LocationsZipcode>? LocationsZipcodes { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("headquarterZipcodes")]
    public IReadOnlyList<HeadquarterZipcode>? HeadquarterZipcodes { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
