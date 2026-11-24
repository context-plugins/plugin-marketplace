using System.Collections.Generic;
using System.Text.Json.Serialization;
using Paid.Core.Models;

namespace Paid.Models;

public record CustomerStateSeats
{
    [JsonPropertyName("total")]
    public required int Total { get; init; }

    [JsonPropertyName("assigned")]
    public required int Assigned { get; init; }

    [JsonPropertyName("unassigned")]
    public required int Unassigned { get; init; }

    [JsonPropertyName("data")]
    public required IReadOnlyList<CustomerStateSeat> Data { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
