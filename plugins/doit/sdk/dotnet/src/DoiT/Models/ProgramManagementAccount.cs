using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace DoiT.Models;

public record ProgramManagementAccount
{
    [JsonPropertyName("dpmaId")]
    public required string DpmaId { get; init; }

    /// <summary>
    /// 12-digit AWS account ID of the program management account.
    /// </summary>
    [JsonPropertyName("accountId")]
    public required string AccountId { get; init; }

    [JsonPropertyName("roleArn")]
    public required string RoleArn { get; init; }

    [JsonPropertyName("stackName")]
    public required string StackName { get; init; }

    [JsonPropertyName("region")]
    public required string Region { get; init; }

    [JsonPropertyName("iamStatus")]
    public required string IamStatus { get; init; }

    /// <summary>
    /// Present when <c>iamStatus</c> indicates drift. <c>null</c> when the deployed IAM matches expectations.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("iamDiff")]
    public IamDiff? IamDiff { get; init; }

    [JsonPropertyName("createdAt")]
    public required DateTimeOffset CreatedAt { get; init; }

    /// <summary>
    /// When this account's handshake/tenant state was last refreshed. <c>null</c> if never refreshed.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lastRefreshTime")]
    public DateTimeOffset? LastRefreshTime { get; init; }

    [JsonPropertyName("tenants")]
    public required IReadOnlyList<MappedTenant> Tenants { get; init; }

    /// <summary>
    /// Per-AWS-Organizations-handshake-state counts across all tenants mapped to a PMA.
    /// </summary>
    [JsonPropertyName("handshakeStatus")]
    public required HandshakeStatus HandshakeStatus { get; init; }
}
