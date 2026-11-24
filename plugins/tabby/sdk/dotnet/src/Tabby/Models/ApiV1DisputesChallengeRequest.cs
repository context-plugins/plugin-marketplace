using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using Tabby.Core.Models;
using Tabby.Models.Enums;

namespace Tabby.Models;

public record ApiV1DisputesChallengeRequest
{
    /// <summary>
    /// ID of the dispute
    /// </summary>
    [JsonPropertyName("dispute_id")]
    public required string DisputeId { get; init; }

    /// <summary>
    /// Comment for Tabby support.
    /// </summary>
    [JsonPropertyName("description")]
    public required string Description { get; init; }

    /// <summary>
    /// Reason for requesting dispute challenge:
    ///   - <c>merchant_reason_other</c> - there were other problems with the order that required further clarification;
    ///   - <c>merchant_reason_order_on_its_way</c> - the order has been confirmed and is in the process of being delivered;
    ///   - <c>merchant_reason_order_has_been_already_delivered</c> - the order has already been delivered and is complete;
    ///   - <c>merchant_reason_order_amount_should_be_different</c> - there was a problem with the amount of the order and it needed to be changed;
    ///   - <c>merchant_reason_problem_with_delivery</c> - there was a problem with the order during delivery that needed to be adjusted and resolved.
    /// </summary>
    [JsonPropertyName("reason")]
    public required Reason Reason { get; init; }

    /// <summary>
    /// If the dispute challenged with reason <c>merchant_reason_order_amount_should_be_different</c> - a new disputed amount is required.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("amount")]
    public string? Amount { get; init; }

    /// <summary>
    /// Attachment ID that will be attached. ID can be received via <c>upload attachment</c> endpoint.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("attachment_ids")]
    public IReadOnlyList<Guid>? AttachmentIds { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
