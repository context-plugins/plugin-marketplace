using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using BundleSocial.Core.Models;

namespace BundleSocial.Models;

public record MediaItem
{
    [JsonPropertyName("uploadId")]
    public required string UploadId { get; init; }

    /// <summary>
    /// Alternative text for the image, used by screen readers. Applies to images/GIFs only.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("altText")]
    [MaxLength(1000)]
    public string? AltText { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
