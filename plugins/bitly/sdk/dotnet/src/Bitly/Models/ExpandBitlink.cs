using System.Text.Json.Serialization;
using Bitly.Core.Models;

namespace Bitly.Models;

public record ExpandBitlink
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("bitlink_id")]
    public string? BitlinkId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
