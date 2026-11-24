using System.Text.Json.Serialization;
using CallNode.Core.Models;

namespace CallNode.Models;

public record Wallet
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("previousBalance")]
    public double? PreviousBalance { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("newBalance")]
    public double? NewBalance { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
