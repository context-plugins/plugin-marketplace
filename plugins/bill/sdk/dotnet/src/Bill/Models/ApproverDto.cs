using System;
using System.Text.Json.Serialization;
using Bill.Core.Models;
using Bill.Models.Enums;

namespace Bill.Models;

/// <summary>
/// Approver DTO.
/// </summary>
public record ApproverDto
{
    /// <summary>
    /// BILL-generated ID of the individual user or approval group.
    /// * <b>Individual user</b>: The value begins with <c>006</c>.
    /// * <b>Approval group</b>: The value begins with <c>agp</c>.
    /// </summary>
    [JsonPropertyName("userId")]
    public required string UserId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("status")]
    public ApproverStatusDto? Status { get; init; }

    /// <summary>
    /// Bill approval order.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("approverOrder")]
    public double? ApproverOrder { get; init; }

    /// <summary>
    /// Status change date and time
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("statusChangedTime")]
    public DateTimeOffset? StatusChangedTime { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
