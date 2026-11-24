using System;
using System.Text.Json.Serialization;
using Paid.Core.Models;
using Paid.Models.Enums;

namespace Paid.Models;

public record OrderSeat
{
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    [JsonPropertyName("orderId")]
    public required string OrderId { get; init; }

    [JsonPropertyName("productExternalId")]
    public required string? ProductExternalId { get; init; }

    [JsonPropertyName("status")]
    public required SeatAssignmentStatus Status { get; init; }

    [JsonPropertyName("assignee")]
    public required SeatAssignee Assignee { get; init; }

    [JsonPropertyName("createdAt")]
    public required DateTimeOffset CreatedAt { get; init; }

    [JsonPropertyName("updatedAt")]
    public required DateTimeOffset UpdatedAt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
