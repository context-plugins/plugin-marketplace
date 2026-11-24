using System;
using System.Text.Json.Serialization;
using DoiT.Core.Models;
using DoiT.Models.Enums;

namespace DoiT.Models;

/// <summary>
/// An API token of a service account. It authenticates with the service account's permissions, and carries no secret material after the create response.
/// </summary>
public record ServiceAccountToken
{
    /// <summary>
    /// API token ID. <c>null</c> only on a dry-run create.
    /// </summary>
    [JsonPropertyName("id")]
    public required string? Id { get; init; }

    /// <summary>
    /// ID of the service account that owns the token.
    /// </summary>
    [JsonPropertyName("serviceAccountId")]
    public required string ServiceAccountId { get; init; }

    /// <summary>
    /// ID of the customer whose service account the token belongs to.
    /// </summary>
    [JsonPropertyName("customerId")]
    public required string CustomerId { get; init; }

    /// <summary>
    /// Name, unique among the service account's tokens.
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// The token's stored state: <c>active</c> while it is enabled, <c>disabled</c> once it has been turned off. This is not a liveness signal — a token whose <c>expiresTime</c> has passed stops authenticating but keeps the state it was stored with, so <c>active</c> here does not by itself mean the token still works; compare <c>expiresTime</c>. Only these two values can be set.
    /// </summary>
    [JsonPropertyName("state")]
    public required StateDoiTServiceAccountsApi State { get; init; }

    /// <summary>
    /// When the token was created. <c>null</c> only on a dry-run create.
    /// </summary>
    [JsonPropertyName("createTime")]
    public required DateTimeOffset? CreateTime { get; init; }

    /// <summary>
    /// When the token stops authenticating. <c>null</c> when it does not expire.
    /// </summary>
    [JsonPropertyName("expiresTime")]
    public required DateTimeOffset? ExpiresTime { get; init; }

    /// <summary>
    /// When the token last authenticated a request. <c>null</c> until it is first used.
    /// </summary>
    [JsonPropertyName("lastUsedTime")]
    public required DateTimeOffset? LastUsedTime { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
