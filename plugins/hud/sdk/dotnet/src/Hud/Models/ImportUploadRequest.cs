using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Hud.Core.Models;
using Hud.Core.Validation.Attributes;

namespace Hud.Models;

/// <summary>
/// A bundle upload, reserved in the caller's data folder under the format's size limit.
/// <para>
/// Publish the uploaded file with ``POST /data/{file_id}/complete`` before importing it.
/// </para>
/// </summary>
public record ImportUploadRequest
{
    [JsonPropertyName("filename")]
    [StringLength(255, MinimumLength = 1)]
    public required string Filename { get; init; }

    [JsonPropertyName("size_bytes")]
    [Minimum(0)]
    public required int SizeBytes { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("content_type")]
    [StringLength(200, MinimumLength = 3)]
    public string? ContentType { get; init; } = "application/octet-stream";

    [JsonPropertyName("format")]
    public string Format { get; } = "harbor";

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
