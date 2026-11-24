using System.Collections.Generic;
using System.Text.Json.Serialization;
using Paid.Core.Models;

namespace Paid.Models;

public record BatchSeatAssignmentsRequest
{
    [JsonPropertyName("assignments")]
    public required IReadOnlyList<BatchSeatAssignmentsRequestAssignmentsItems> Assignments { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
