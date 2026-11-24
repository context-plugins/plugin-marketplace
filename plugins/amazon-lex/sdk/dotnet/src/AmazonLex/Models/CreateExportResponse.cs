using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Models;
using AmazonLex.Models.Enums;

namespace AmazonLex.Models;

public record CreateExportResponse
{
    /// <summary>
    /// An identifier for a specific request to create an export.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("exportId")]
    public string? ExportId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("resourceSpecification")]
    public ExportResourceSpecification? ResourceSpecification { get; init; }

    /// <summary>
    /// The file format used for the bot or bot locale definition files.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("fileFormat")]
    public FileFormat1? FileFormat { get; init; }

    /// <summary>
    /// The status of the export. When the status is Completed, you can use the DescribeExport operation to get the pre-signed S3 URL link to your exported bot or bot locale.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("exportStatus")]
    public ExportStatus? ExportStatus { get; init; }

    /// <summary>
    /// The date and time that the request to export a bot was created.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("creationDateTime")]
    public DateTimeOffset? CreationDateTime { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
