using System.Text.Json.Serialization;
using CallNode.Core.Models;

namespace CallNode.Models;

public record WalletCallnodeIoWholesaleApi
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("balance")]
    public double? Balance { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
