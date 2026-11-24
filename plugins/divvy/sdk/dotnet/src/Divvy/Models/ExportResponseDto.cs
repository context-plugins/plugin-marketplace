using System;
using System.Text.Json.Serialization;
using Divvy.Core.Models;
using Divvy.Models.Enums;

namespace Divvy.Models;

/// <summary>
/// Exports response.
/// </summary>
public record ExportResponseDto
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("entity")]
    public ExportEntity? Entity { get; init; }

    /// <summary>
    /// Exported record template name.
    /// <para>
    /// In the BILL web app, if you create a template for exported records (<b>Settings &gt; Import &amp; export &gt; Custom File Integration &gt; Teamplates</b>), <c>name</c> is set as the template name. If a template is not created, <c>name</c> is set as a BILL-generated value.
    /// </para>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// Export operation processed date and time
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("processedTime")]
    public DateTimeOffset? ProcessedTime { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("status")]
    public ExportStatus? Status { get; init; }

    /// <summary>
    /// Exported record file name
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("fileName")]
    public string? FileName { get; init; }

    /// <summary>
    /// BILL-generated ID of the exported record file.
    /// <para>
    /// Use this value to get the download URL for the exported record file with <c>GET /v3/exports/{exportId}/download-link</c>.
    /// </para>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("exportId")]
    public string? ExportId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
