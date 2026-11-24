using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

public record CustomRegionGeographicAccessScope
{
    /// <summary>
    /// Access is limited to one tenant-owned custom region.
    /// </summary>
    [JsonPropertyName("type")]
    public string Type { get; } = "customRegion";

    /// <summary>
    /// Ready custom region owned by the authenticated tenant.
    /// </summary>
    [JsonPropertyName("customRegionId")]
    [StringLength(200, MinimumLength = 1)]
    public required string CustomRegionId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
