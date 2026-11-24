using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonLex.Core.Models;
using AmazonLex.Models.Enums;

namespace AmazonLex.Models;

public record DescribeExportResponse
{
    /// <summary>
    /// The unique identifier of the described export.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("exportId")]
    public string? ExportId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("resourceSpecification")]
    public ExportResourceSpecification? ResourceSpecification { get; init; }

    /// <summary>
    /// The file format used in the files that describe the resource.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("fileFormat")]
    public FileFormat2? FileFormat { get; init; }

    /// <summary>
    /// The status of the export. When the status is Complete the export archive file is available for download.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("exportStatus")]
    public ExportStatus2? ExportStatus { get; init; }

    /// <summary>
    /// If the exportStatus is failed, contains one or more reasons why the export could not be completed.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("failureReasons")]
    public IReadOnlyList<string>? FailureReasons { get; init; }

    /// <summary>
    /// A pre-signed S3 URL that points to the bot or bot locale archive. The URL is only available for 5 minutes after calling the DescribeExport operation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("downloadUrl")]
    public string? DownloadUrl { get; init; }

    /// <summary>
    /// The date and time that the export was created.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("creationDateTime")]
    public DateTimeOffset? CreationDateTime { get; init; }

    /// <summary>
    /// The last date and time that the export was updated.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lastUpdatedDateTime")]
    public DateTimeOffset? LastUpdatedDateTime { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
