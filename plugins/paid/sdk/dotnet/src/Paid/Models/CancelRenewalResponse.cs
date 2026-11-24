using System;
using System.Text.Json.Serialization;
using Paid.Core.Models;

namespace Paid.Models;

/// <summary>
/// Response after successfully cancelling an order's renewal
/// </summary>
public record CancelRenewalResponse
{
    /// <summary>
    /// The ID of the order
    /// </summary>
    [JsonPropertyName("orderId")]
    public required Guid OrderId { get; init; }

    /// <summary>
    /// The ID of the amendment record
    /// </summary>
    [JsonPropertyName("amendmentId")]
    public required Guid AmendmentId { get; init; }

    /// <summary>
    /// The new version of the order after the amendment
    /// </summary>
    [JsonPropertyName("version")]
    public required int Version { get; init; }

    /// <summary>
    /// The new end date of the order
    /// </summary>
    [JsonPropertyName("endDate")]
    public required DateTimeOffset EndDate { get; init; }

    /// <summary>
    /// The effective date of the cancellation
    /// </summary>
    [JsonPropertyName("effectiveDate")]
    public required DateTimeOffset EffectiveDate { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
