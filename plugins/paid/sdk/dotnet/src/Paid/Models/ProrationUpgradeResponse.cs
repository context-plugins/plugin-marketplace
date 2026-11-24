using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using Paid.Core.Models;

namespace Paid.Models;

/// <summary>
/// Response after successfully scheduling a plan change
/// </summary>
public record ProrationUpgradeResponse
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
    /// The effective date of the plan change
    /// </summary>
    [JsonPropertyName("effectiveDate")]
    public required DateTimeOffset EffectiveDate { get; init; }

    /// <summary>
    /// IDs of order lines that were ended
    /// </summary>
    [JsonPropertyName("endedLineIds")]
    public required IReadOnlyList<Guid> EndedLineIds { get; init; }

    /// <summary>
    /// IDs of new order lines that were created
    /// </summary>
    [JsonPropertyName("createdLineIds")]
    public required IReadOnlyList<Guid> CreatedLineIds { get; init; }

    /// <summary>
    /// IDs of credit lines that were created
    /// </summary>
    [JsonPropertyName("creditLineIds")]
    public required IReadOnlyList<Guid> CreditLineIds { get; init; }

    /// <summary>
    /// Detailed proration calculations for each updated attribute
    /// </summary>
    [JsonPropertyName("prorationDetails")]
    public required IReadOnlyList<ProrationDetail> ProrationDetails { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
