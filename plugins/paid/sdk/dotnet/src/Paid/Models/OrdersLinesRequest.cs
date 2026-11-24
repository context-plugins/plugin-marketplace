using System.Collections.Generic;
using System.Text.Json.Serialization;
using Paid.Core.Models;

namespace Paid.Models;

public record OrdersLinesRequest
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lines")]
    public IReadOnlyList<OrderLineCreate>? Lines { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
