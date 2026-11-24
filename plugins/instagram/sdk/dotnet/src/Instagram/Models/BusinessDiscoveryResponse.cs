using System.Text.Json.Serialization;
using Instagram.Core.Models;

namespace Instagram.Models;

public record BusinessDiscoveryResponse
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("business_discovery")]
    public User? BusinessDiscovery { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
