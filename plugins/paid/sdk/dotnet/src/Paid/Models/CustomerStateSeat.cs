using System.Text.Json.Serialization;
using Paid.Core.Models;
using Paid.Models.Enums;

namespace Paid.Models;

public record CustomerStateSeat
{
    /// <summary>
    /// Seat UUID. Seats do not currently have display IDs; use this value as <c>{seatId}</c> with the order seat assignment endpoints.
    /// </summary>
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    [JsonPropertyName("orderId")]
    public required string OrderId { get; init; }

    [JsonPropertyName("product")]
    public required CustomerStateProductRef Product { get; init; }

    [JsonPropertyName("status")]
    public required CustomerStateSeatStatus Status { get; init; }

    [JsonPropertyName("assignee")]
    public required CustomerStateSeatAssignee Assignee { get; init; }

    [JsonPropertyName("credits")]
    public required CustomerStateCreditSummary Credits { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
