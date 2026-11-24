using System.Text.Json.Serialization;
using AmazonLex.Core.Models;
using AmazonLex.Models.Enums;

namespace AmazonLex.Models;

public record DeleteExportResponse
{
    /// <summary>
    /// The unique identifier of the deleted export.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("exportId")]
    public string? ExportId { get; init; }

    /// <summary>
    /// The current status of the deletion. When the deletion is complete, the export will no longer be returned by the ListExports operation and calls to the DescribeExport operation with the export identifier will fail.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("exportStatus")]
    public ExportStatus1? ExportStatus { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
