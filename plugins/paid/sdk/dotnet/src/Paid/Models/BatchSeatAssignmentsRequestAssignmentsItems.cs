using System.Text.Json.Serialization;
using Paid.Core.Models;

namespace Paid.Models;

public record BatchSeatAssignmentsRequestAssignmentsItems
{
    [JsonPropertyName("seatId")]
    public required string SeatId { get; init; }

    [JsonPropertyName("userExternalId")]
    public required string? UserExternalId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
