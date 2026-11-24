using System.Text.Json.Serialization;
using Hightouch.Models.Enums;

namespace Hightouch.Models;

/// <summary>
/// Delivery status for one requested send.
/// </summary>
public record BatchSendStatusResult
{
    /// <summary>
    /// The <c>sendId</c> this result is for, echoed from the request.
    /// </summary>
    [JsonPropertyName("sendId")]
    public required string SendId { get; init; }

    /// <summary>
    /// Delivery status of a send. <c>not_found</c> means no send with this id exists on
    /// the campaign, including a send that has not been processed yet.
    /// </summary>
    [JsonPropertyName("status")]
    public required SendStatus Status { get; init; }

    /// <summary>
    /// Readable explanation for why this send was dropped or failed. Present
    /// when <c>status</c> is <c>"dropped"</c> or <c>"failed"</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("reason")]
    public string? Reason { get; init; }

    /// <summary>
    /// Stable code for <c>reason</c>. Present whenever <c>reason</c> is.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("reasonCode")]
    public SendStatusReasonCode1? ReasonCode { get; init; }

    /// <summary>
    /// ISO 8601 time the status last changed. Absent when <c>status</c> is
    /// <c>"not_found"</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("updatedAt")]
    public string? UpdatedAt { get; init; }
}
