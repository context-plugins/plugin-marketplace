using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Lusha.Core.Models;

namespace Lusha.Models;

public record WebsiteVisitsRequest
{
    /// <summary>
    /// Domains configured for tracking in the Lusha dashboard.
    /// </summary>
    [JsonPropertyName("domains")]
    [MinLength(1)]
    public required IReadOnlyList<string> Domains { get; init; }

    /// <summary>
    /// Window start date (YYYY-MM-DD).
    /// </summary>
    [JsonPropertyName("startDate")]
    public required DateTimeOffset StartDate { get; init; }

    /// <summary>
    /// Window end date (YYYY-MM-DD). Range must be ≤ 3 months.
    /// </summary>
    [JsonPropertyName("endDate")]
    public required DateTimeOffset EndDate { get; init; }

    [JsonPropertyName("pagination")]
    public required PaginationLushaApiDocumentationWebsiteVisitsApi Pagination { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sort")]
    public Sort? Sort { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("filters")]
    public WebsiteVisitsFilters? Filters { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
