using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apibara.Core.Models;

namespace Apibara.Models;

public record ShippingResponse
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("data")]
    public IReadOnlyList<ShippingPrice>? Data { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
