using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record DeleteExportRequest
{
    /// <summary>
    /// The unique identifier of the export to delete.
    /// </summary>
    [JsonPropertyName("exportId")]
    public required string ExportId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
