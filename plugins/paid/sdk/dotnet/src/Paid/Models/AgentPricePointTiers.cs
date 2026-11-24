using System.Text.Json.Serialization;
using Paid.Core.Models;

namespace Paid.Models;

public record AgentPricePointTiers
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("minQuantity")]
    public double? MinQuantity { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("maxQuantity")]
    public double? MaxQuantity { get; init; }

    [JsonPropertyName("unitPrice")]
    public required double UnitPrice { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
