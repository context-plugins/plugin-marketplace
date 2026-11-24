using System.Collections.Generic;
using System.Text.Json.Serialization;
using Paid.Core.Models;

namespace Paid.Models;

public record BatchSeatAssignmentsResponse
{
    [JsonPropertyName("data")]
    public required IReadOnlyList<OrderSeat> Data { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
