using System;
using System.Text.Json.Serialization;
using Paid.Core.Models;

namespace Paid.Models;

/// <summary>
/// Request to cancel an order's renewal
/// </summary>
public record CancelRenewalRequest
{
    /// <summary>
    /// The current version of the order (for optimistic locking)
    /// </summary>
    [JsonPropertyName("orderVersion")]
    public required int OrderVersion { get; init; }

    /// <summary>
    /// The date from which the renewal should be cancelled (ISO 8601 format)
    /// </summary>
    [JsonPropertyName("cancelFromDate")]
    public required DateTimeOffset CancelFromDate { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
