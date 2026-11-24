using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using Lusha.Core.Models;

namespace Lusha.Models;

public record Signals1
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("types")]
    public IReadOnlyList<string>? Types { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("startDate")]
    public DateTimeOffset? StartDate { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("filterByLocation")]
    public IReadOnlyList<FilterByLocation>? FilterByLocation { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("filterByDepartment")]
    public IReadOnlyList<FilterByDepartment>? FilterByDepartment { get; init; }

    /// <summary>
    /// Refines linkedinActivityIntent results by Bombora intent category. Applied only when linkedinActivityIntent is present in <c>types</c> (or selected via allSignals). Omit to match all categories. See GET /v3/companies/signals/filters/intentCategories for the full list of valid values.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("filterByIntentCategory")]
    public IReadOnlyList<string>? FilterByIntentCategory { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
