using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using Fillo.Core.Models;
using Fillo.Models.Enums;

namespace Fillo.Models;

public record AgentGrant
{
    /// <summary>
    /// The grant id — also the value a revocation must confirm with.
    /// </summary>
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    [JsonPropertyName("client")]
    public required string Client { get; init; }

    [JsonPropertyName("scopes")]
    public required IReadOnlyList<string> Scopes { get; init; }

    /// <summary>
    /// <c>ask</c> sends every outward action to a human approval link first; <c>auto</c> runs Tier B directly. Destructive actions always need the link.
    /// </summary>
    [JsonPropertyName("approvalPolicy")]
    public required ApprovalPolicy ApprovalPolicy { get; init; }

    [JsonPropertyName("createdAt")]
    public required DateTimeOffset CreatedAt { get; init; }

    [JsonPropertyName("lastUsedAt")]
    public required DateTimeOffset? LastUsedAt { get; init; }

    [JsonPropertyName("expiresAt")]
    public required DateTimeOffset? ExpiresAt { get; init; }

    [JsonPropertyName("expired")]
    public required bool Expired { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
