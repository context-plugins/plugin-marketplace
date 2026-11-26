using System;
using System.Text.Json.Serialization;
using Bill.Core.Models;
using Bill.Models.Enums;

namespace Bill.Models;

/// <summary>
/// DTO representing an action that happened on a reimbursement from the Spend API.
/// </summary>
public record StatusHistory
{
    /// <summary>
    /// BILL-generated ID of the user that approved or denied the reimbursement
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("actorId")]
    public string? ActorId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("actorRole")]
    public ActorRole? ActorRole { get; init; }

    /// <summary>
    /// Reimbursement action date and time
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("occurredTime")]
    public DateTimeOffset? OccurredTime { get; init; }

    /// <summary>
    /// Reimbursement action note
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("note")]
    public string? Note { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("status")]
    public ReimbursementStatus? Status { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
