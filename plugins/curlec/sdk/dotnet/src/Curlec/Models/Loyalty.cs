using System.Text.Json.Serialization;
using Curlec.Core.Models;

namespace Curlec.Models;

public record Loyalty
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("points")]
    public int? Points { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("redeemed_points")]
    public int? RedeemedPoints { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
