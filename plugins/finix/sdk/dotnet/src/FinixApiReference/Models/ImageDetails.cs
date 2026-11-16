using System.Collections.Generic;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;

namespace FinixApiReference.Models;

/// <summary>
/// Product/service image locations.
/// </summary>
public record ImageDetails
{
    /// <summary>
    /// The location of a item image.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("primary_image_url")]
    public string? PrimaryImageUrl { get; init; }

    /// <summary>
    /// The locations of backup images if there is an issue with the primary image.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("alternative_image_urls")]
    public IReadOnlyList<string>? AlternativeImageUrls { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
