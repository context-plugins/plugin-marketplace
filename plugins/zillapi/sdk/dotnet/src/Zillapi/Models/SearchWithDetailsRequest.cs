using System.Collections.Generic;
using System.Text.Json.Serialization;
using Zillapi.Core.Models;
using Zillapi.Core.Validation.Attributes;
using Zillapi.Models.Enums;

namespace Zillapi.Models;

public record SearchWithDetailsRequest
{
    /// <summary>
    /// Normalized search filters. A <c>bbox</c> is required (unless the request supplies <c>searchUrls</c> instead); a free-text search without a bounding box is rejected with 400 invalid_filters and never hits upstream.
    /// </summary>
    [JsonPropertyName("filters")]
    public required SearchFilters1 Filters { get; init; }

    /// <summary>
    /// Advanced: pre-built Zillow search URLs. Provide this instead of filters.bbox.
    /// </summary>
    [JsonPropertyName("searchUrls")]
    public required IReadOnlyList<SearchUrl> SearchUrls { get; init; }

    /// <summary>
    /// PAGINATION (default, up to ~820 results); MAP_MARKERS (fastest, up to ~500, less data per row); PAGINATION_WITH_ZOOM_IN (exhaustive recursive zoom, always runs async).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("extractionMethod")]
    public ExtractionMethod? ExtractionMethod { get; init; } = ExtractionMethod.Pagination;

    /// <summary>
    /// Maximum records to return (product hard cap 500). When maxItems &gt; 50 the request is processed asynchronously and returns 202 with a job_id instead of results inline. maxItems ≤ 50 runs synchronously.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("maxItems")]
    [Minimum(1)]
    [Maximum(500)]
    public int? MaxItems { get; init; } = 50;

    /// <summary>
    /// Force async processing (202/job) even when maxItems ≤ 50.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("async")]
    public bool? Async { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("propertyStatus")]
    public PropertyStatus? PropertyStatus { get; init; } = PropertyStatus.ForSale;

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("extractBuildingUnits")]
    public ExtractBuildingUnits? ExtractBuildingUnits { get; init; } = ExtractBuildingUnits.Disabled;

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
