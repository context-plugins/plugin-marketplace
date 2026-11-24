using System.Text.Json.Serialization;
using AmazonLex.Core.Models;
using AmazonLex.Models.Enums;

namespace AmazonLex.Models;

public record GetExportResponse
{
    /// <summary>
    /// The name of the bot being exported.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// The version of the bot being exported.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("version")]
    public string? Version { get; init; }

    /// <summary>
    /// The type of the exported resource.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("resourceType")]
    public ResourceType1? ResourceType { get; init; }

    /// <summary>
    /// The format of the exported data.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("exportType")]
    public ExportType? ExportType { get; init; }

    /// <summary>
    /// The status of the export. IN_PROGRESS - The export is in progress. READY - The export is complete. FAILED - The export could not be completed.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("exportStatus")]
    public ExportStatus4? ExportStatus { get; init; }

    /// <summary>
    /// If status is FAILED, Amazon Lex provides the reason that it failed to export the resource.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("failureReason")]
    public string? FailureReason { get; init; }

    /// <summary>
    /// An S3 pre-signed URL that provides the location of the exported resource. The exported resource is a ZIP archive that contains the exported resource in JSON format. The structure of the archive may change. Your code should not rely on the archive structure.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("url")]
    public string? Url { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
