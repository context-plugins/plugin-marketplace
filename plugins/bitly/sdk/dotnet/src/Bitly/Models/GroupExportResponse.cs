using System.Collections.Generic;
using System.Text.Json.Serialization;
using Bitly.Core.Models;
using Bitly.Models.Enums;

namespace Bitly.Models;

public record GroupExportResponse
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("export_type")]
    public ExportType1? ExportType { get; init; }

    /// <summary>
    /// Suggested download filename for the CSV.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("filename")]
    public string? Filename { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("media_type")]
    public string? MediaType { get; init; }

    /// <summary>
    /// Number of data rows in the CSV (excluding the header row).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("row_count")]
    public int? RowCount { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("column_count")]
    public int? ColumnCount { get; init; }

    /// <summary>
    /// CSV column headers in order.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("columns")]
    public IReadOnlyList<string>? Columns { get; init; }

    /// <summary>
    /// Size of the raw CSV bytes before base64 encoding.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("size_bytes")]
    public int? SizeBytes { get; init; }

    /// <summary>
    /// CSV file as a data:text/csv;base64,... URI.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("data_uri")]
    public string? DataUri { get; init; }

    /// <summary>
    /// Metrics window start (Unix seconds) when metrics are included in the export.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("unix_from")]
    public int? UnixFrom { get; init; }

    /// <summary>
    /// Metrics window end (Unix seconds) when metrics are included in the export.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("unix_to")]
    public int? UnixTo { get; init; }

    /// <summary>
    /// True when the match set exceeded the per-request row cap and only the first cap rows were exported.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("truncated")]
    public bool? Truncated { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
