using System.Text.Json.Serialization;
using Bitly.Core.Models;

namespace Bitly.Models;

public record AddCustomBitlink
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("custom_bitlink")]
    public string? CustomBitlink { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("bitlink_id")]
    public string? BitlinkId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
