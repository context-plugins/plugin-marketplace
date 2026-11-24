using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using BundleSocial.Core.Models;
using BundleSocial.Models.Enums;

namespace BundleSocial.Models;

public record ApiV1AutomationsRequest
{
    [JsonPropertyName("teamId")]
    public required string TeamId { get; init; }

    [JsonPropertyName("name")]
    [StringLength(120, MinimumLength = 1)]
    public required string Name { get; init; }

    [JsonPropertyName("platformScope")]
    public required PlatformScope PlatformScope { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("definition")]
    public Definition? Definition { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
