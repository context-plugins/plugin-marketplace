using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using BundleSocial.Core.Models;

namespace BundleSocial.Models;

public record ApiV1TeamRequest
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    [StringLength(80, MinimumLength = 3)]
    public string? Name { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("avatarUrl")]
    public string? AvatarUrl { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
