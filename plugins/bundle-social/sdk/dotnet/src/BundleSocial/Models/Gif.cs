using System.Text.Json.Serialization;
using BundleSocial.Core.Models;
using BundleSocial.Models.Enums;

namespace BundleSocial.Models;

public record Gif
{
    [JsonPropertyName("gifId")]
    public required string GifId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("provider")]
    public Provider? Provider { get; init; } = Provider.Giphy;

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
