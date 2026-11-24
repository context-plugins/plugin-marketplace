using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using BundleSocial.Core.Models;
using BundleSocial.Models.Enums;

namespace BundleSocial.Models;

public record ApiV1MiscLinkedinPostReshareRequest
{
    [JsonPropertyName("teamId")]
    public required string TeamId { get; init; }

    /// <summary>
    /// LinkedIn post URN to reshare
    /// </summary>
    [JsonPropertyName("parentPostUrn")]
    [MinLength(1)]
    public required string ParentPostUrn { get; init; }

    [JsonPropertyName("commentary")]
    [StringLength(3000, MinimumLength = 1)]
    public required string Commentary { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("visibility")]
    public Visibility? Visibility { get; init; } = Visibility.Public;

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("disableReshare")]
    public bool? DisableReshare { get; init; } = false;

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
