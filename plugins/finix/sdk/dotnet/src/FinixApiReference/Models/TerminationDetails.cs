using System;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;
using FinixApiReference.Models.Enums;

namespace FinixApiReference.Models;

public record TerminationDetails
{
    /// <summary>
    /// Timestamp indicating when the termination occurred.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("terminated_at")]
    public DateTimeOffset? TerminatedAt { get; init; }

    /// <summary>
    /// The reason for termination. Finix reserves the right to return enums that are not listed here.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("reason")]
    public Reason1? Reason { get; init; }

    /// <summary>
    /// An explanation that provides context for the termination.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    [MaxLength(1000)]
    public string? Description { get; init; }

    /// <summary>
    /// The role that initiated the termination. If the API key belongs to the <c>USER</c> role, the following values will be returned:
    ///   - If the role is <c>ROLE_PLATFORM</c>, it will return <c>PLATFORM_USER</c>.
    ///   - If the role is <c>ROLE_PARTNER</c>, it will return <c>PARTNER_USER</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("terminated_by")]
    public TerminatedBy? TerminatedBy { get; init; }

    /// <summary>
    /// The <c>User</c> ID of the user who initiated the termination of the <c>Merchant</c> account.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("terminated_by_user_id")]
    public string? TerminatedByUserId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
