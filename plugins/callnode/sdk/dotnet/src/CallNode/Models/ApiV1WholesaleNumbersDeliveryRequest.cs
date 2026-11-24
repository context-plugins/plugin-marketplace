using System.Text.Json.Serialization;
using CallNode.Core.Models;

namespace CallNode.Models;

public record ApiV1WholesaleNumbersDeliveryRequest
{
    [JsonPropertyName("deliverTo")]
    public required string DeliverTo { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
