using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;
using GoogleCloudDataproc.Models.Enums;

namespace GoogleCloudDataproc.Models;

/// <summary>
/// Summary of results for a specific destination catalog.
/// </summary>
public record CatalogSummary
{
    /// <summary>
    /// Output only. The type of the catalog.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("catalogType")]
    public CatalogType? CatalogType { get; init; }

    /// <summary>
    /// Output only. The catalog resource name (format: projects/*/catalogs/*).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("catalog")]
    public string? Catalog { get; init; }

    /// <summary>
    /// Output only. Summary of results for each database in the catalog.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("databaseSummaries")]
    public IReadOnlyList<DatabaseSummary>? DatabaseSummaries { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
