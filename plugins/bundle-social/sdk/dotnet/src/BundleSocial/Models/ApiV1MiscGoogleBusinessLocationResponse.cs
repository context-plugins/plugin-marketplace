using System.Text.Json.Serialization;
using BundleSocial.Core.Models;

namespace BundleSocial.Models;

public record ApiV1MiscGoogleBusinessLocationResponse
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
