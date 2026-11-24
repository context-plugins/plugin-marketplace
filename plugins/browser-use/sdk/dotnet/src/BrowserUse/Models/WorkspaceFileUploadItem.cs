using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using BrowserUse.Core.Models;
using BrowserUse.Core.Validation.Attributes;

namespace BrowserUse.Models;

public record WorkspaceFileUploadItem
{
    /// <summary>
    /// Filename, e.g. "data.csv"
    /// </summary>
    [JsonPropertyName("name")]
    [StringLength(255, MinimumLength = 1)]
    public required string Name { get; init; }

    /// <summary>
    /// MIME type, e.g. "text/csv"
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("contentType")]
    [MaxLength(255)]
    public string? ContentType { get; init; } = "application/octet-stream";

    /// <summary>
    /// Exact file size in bytes; the presigned URL is pinned to it.
    /// </summary>
    [JsonPropertyName("size")]
    [Minimum(1)]
    [Maximum(52428800)]
    public required int Size { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
