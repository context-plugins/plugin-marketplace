using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using BundleSocial.Core.Models;
using BundleSocial.Models.AnyOf;
using BundleSocial.Models.Enums;

namespace BundleSocial.Models;

public record Item3BundleSocialAutomationApi
{
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    [JsonPropertyName("teamId")]
    public required string TeamId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("organizationId")]
    public string? OrganizationId { get; init; }

    [JsonPropertyName("platform")]
    public required Platform Platform { get; init; }

    [JsonPropertyName("socialAccountId")]
    public required string SocialAccountId { get; init; }

    [JsonPropertyName("type")]
    public required Type112 Type { get; init; }

    [JsonPropertyName("status")]
    public required Status59 Status { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("config")]
    public Config2? Config { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("providerResponse")]
    public IReadOnlyDictionary<string, object>? ProviderResponse { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lastSyncedAt")]
    public DateTimeOffset? LastSyncedAt { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lastSyncError")]
    public LastSyncError? LastSyncError { get; init; }

    [JsonPropertyName("createdAt")]
    public required DateTimeOffset? CreatedAt { get; init; }

    [JsonPropertyName("updatedAt")]
    public required DateTimeOffset? UpdatedAt { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("socialAccount")]
    public SocialAccount? SocialAccount { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
