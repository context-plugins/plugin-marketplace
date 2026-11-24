using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Request body for [CreateExportRequest]
/// </summary>
public record GoogleCloudApigeeV1ExportRequest
{
    /// <summary>
    /// Optional. Delimiter used in the CSV file, if <c>outputFormat</c> is set to <c>csv</c>. Defaults to the <c>,</c> (comma) character. Supported delimiter characters include comma (<c>,</c>), pipe (<c>|</c>), and tab (<c>\t</c>).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("csvDelimiter")]
    public string? CsvDelimiter { get; init; }

    /// <summary>
    /// Optional. Description of the export job.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// Required. Name of the preconfigured datastore.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("datastoreName")]
    public string? DatastoreName { get; init; }

    /// <summary>
    /// Optional. Output format of the export. Valid values include: <c>csv</c> or <c>json</c>. Defaults to <c>json</c>. Note: Configure the delimiter for CSV output using the <c>csvDelimiter</c> property.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("outputFormat")]
    public string? OutputFormat { get; init; }

    /// <summary>
    /// Required. Display name of the export job.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// Required. Date range of the data to export.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dateRange")]
    public GoogleCloudApigeeV1DateRange2? DateRange { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
