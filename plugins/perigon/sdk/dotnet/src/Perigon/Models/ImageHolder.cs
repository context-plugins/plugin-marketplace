using System.Text.Json.Serialization;
using Perigon.Core.Models;

namespace Perigon.Models;

public record ImageHolder
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("url")]
    public string? Url { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
