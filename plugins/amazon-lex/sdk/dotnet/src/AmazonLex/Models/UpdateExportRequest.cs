using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record UpdateExportRequest
{
    /// <summary>
    /// The unique identifier Amazon Lex assigned to the export.
    /// </summary>
    [JsonPropertyName("exportId")]
    public required string ExportId { get; init; }

    /// <summary>
    /// The new password to use to encrypt the export zip archive.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("filePassword")]
    public string? FilePassword { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
