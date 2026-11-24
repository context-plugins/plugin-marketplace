using System.Collections.Generic;
using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

public record DatahubV1CsvUploadResponse
{
    /// <summary>
    /// batch id, generated during ingestion
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("batch")]
    public string? Batch { get; init; }

    /// <summary>
    /// the number of events that have been accepted for processing
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ingestedRows")]
    public int? IngestedRows { get; init; }

    /// <summary>
    /// the schema template the file was validated against
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("schemaTemplate")]
    public string? SchemaTemplate { get; init; }

    /// <summary>
    /// the number of source rows in the file
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sourceRecords")]
    public int? SourceRecords { get; init; }

    /// <summary>
    /// the number of DataHub events generated from the source rows
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("generatedEvents")]
    public int? GeneratedEvents { get; init; }

    /// <summary>
    /// ids of the batches soft-deleted because <c>replace</c> was set; omitted when none
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("replacedBatches")]
    public IReadOnlyList<string>? ReplacedBatches { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
