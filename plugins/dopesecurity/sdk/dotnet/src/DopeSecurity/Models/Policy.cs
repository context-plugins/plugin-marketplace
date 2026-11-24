using System;
using System.Text.Json.Serialization;
using DopeSecurity.Core.Models;
using DopeSecurity.Models.Enums;

namespace DopeSecurity.Models;

/// <summary>
/// Summary of a policy
/// </summary>
public record Policy
{
    /// <summary>
    /// Unique name of the policy within the tenant
    /// </summary>
    [JsonPropertyName("policyName")]
    public required string PolicyName { get; init; }

    /// <summary>
    /// ISO-8601 timestamp of the last policy modification
    /// </summary>
    [JsonPropertyName("updatedAt")]
    public required DateTimeOffset UpdatedAt { get; init; }

    /// <summary>
    /// Effective SSL inspection status for this policy.
    /// If SSL inspection is not explicitly configured on this policy, the value is
    /// inherited from the Base Policy.
    /// </summary>
    [JsonPropertyName("sslInspection")]
    public required SslInspection SslInspection { get; init; }

    /// <summary>
    /// Number of users/groups who have this policy as a conflicting assignment. Not present for the Base Policy.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("clashCount")]
    public int? ClashCount { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
