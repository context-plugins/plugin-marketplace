using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Lusha.Core.Models;
using Lusha.Models.Enums;

namespace Lusha.Models;

public record V3ContactFilterCriteria
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("names")]
    public IReadOnlyList<string>? Names { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("jobTitles")]
    public IReadOnlyList<string>? JobTitles { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("jobTitlesExactMatch")]
    public IReadOnlyList<string>? JobTitlesExactMatch { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("normalizedJobTitles")]
    public IReadOnlyList<string>? NormalizedJobTitles { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("searchText")]
    [MaxLength(200)]
    public string? SearchText { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("countries")]
    public IReadOnlyList<string>? Countries { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("locations")]
    public IReadOnlyList<V3Location>? Locations { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("seniorityIds")]
    public IReadOnlyList<int>? SeniorityIds { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("departments")]
    public IReadOnlyList<string>? Departments { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("linkedinUrls")]
    public IReadOnlyList<string>? LinkedinUrls { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("existingDataPoints")]
    public IReadOnlyList<string>? ExistingDataPoints { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("signals")]
    public Signals? Signals { get; init; }

    /// <summary>
    /// Personal data — no catalog.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("emails")]
    public IReadOnlyList<string>? Emails { get; init; }

    /// <summary>
    /// Personal data — no catalog.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("previousEmails")]
    public IReadOnlyList<string>? PreviousEmails { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("previousJobTitle")]
    public IReadOnlyList<string>? PreviousJobTitle { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("skills")]
    public IReadOnlyList<string>? Skills { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("certifications")]
    public IReadOnlyList<string>? Certifications { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("awards")]
    public IReadOnlyList<string>? Awards { get; init; }

    /// <summary>
    /// Encrypted contact id from a prior search's <c>results[].id</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ids")]
    public IReadOnlyList<string>? Ids { get; init; }

    /// <summary>
    /// Pairs with <c>existingDataPoints</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("existingDataPointsCondition")]
    public ExistingDataPointsCondition? ExistingDataPointsCondition { get; init; }

    /// <summary>
    /// Refinement-only — must be paired with a base filter (e.g. <c>jobTitles</c>).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("jobChangedAfterDate")]
    public DateTimeOffset? JobChangedAfterDate { get; init; }

    /// <summary>
    /// Refinement-only — must be paired with a base filter.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("jobChangedLastViewDate")]
    public DateTimeOffset? JobChangedLastViewDate { get; init; }

    /// <summary>
    /// Refinement-only — must be paired with a base filter.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("education")]
    public Education? Education { get; init; }

    /// <summary>
    /// Refinement-only — must be paired with a base filter. Raw 0–100 contact score. Distinct from the <c>confidence</c> band ("A+"/"A") returned on enriched contacts, which is derived from this score (e.g. <c>A+</c> when score &gt; 75).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("score")]
    public Score? Score { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("geographicDetails")]
    public IReadOnlyList<GeographicDetail>? GeographicDetails { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
