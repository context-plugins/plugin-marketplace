using System;
using System.Text.Json.Serialization;
using Paid.Core.Models;

namespace Paid.Models;

/// <summary>
/// The subscription details, or null if the customer has no active plan
/// </summary>
public record PlansCurrentGetResponsesContentApplicationJsonSchemaSubscription
{
    /// <summary>
    /// The ID of the order
    /// </summary>
    [JsonPropertyName("orderId")]
    public required Guid OrderId { get; init; }

    /// <summary>
    /// The display ID of the order
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("orderDisplayId")]
    public string? OrderDisplayId { get; init; }

    /// <summary>
    /// The start date of the subscription
    /// </summary>
    [JsonPropertyName("startDate")]
    public required DateTimeOffset StartDate { get; init; }

    /// <summary>
    /// The end date of the subscription (null if ongoing)
    /// </summary>
    [JsonPropertyName("endDate")]
    public required DateTimeOffset? EndDate { get; init; }

    /// <summary>
    /// The total usage quantity across all features on this order
    /// </summary>
    [JsonPropertyName("totalUsage")]
    public required int TotalUsage { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
