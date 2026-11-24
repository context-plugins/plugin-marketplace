using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

/// <summary>
/// A non-human identity owned by a customer. Its API tokens authenticate with exactly the permissions listed here.
/// </summary>
public record ServiceAccount
{
    /// <summary>
    /// Service account ID. <c>null</c> only on a dry-run create.
    /// </summary>
    [JsonPropertyName("id")]
    public required string? Id { get; init; }

    /// <summary>
    /// ID of the customer that owns the service account.
    /// </summary>
    [JsonPropertyName("customerId")]
    public required string CustomerId { get; init; }

    /// <summary>
    /// Name, unique among the customer's service accounts.
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// Free-text description.
    /// </summary>
    [JsonPropertyName("description")]
    public required string Description { get; init; }

    /// <summary>
    /// Platform permission names in camelCase, as shown in the DoiT console role editor.
    /// </summary>
    [JsonPropertyName("permissions")]
    public required IReadOnlyList<string> Permissions { get; init; }

    /// <summary>
    /// Display name of the user who created the service account. <c>null</c> when unknown or when the service account was created with a service account token.
    /// </summary>
    [JsonPropertyName("createdBy")]
    public required string? CreatedBy { get; init; }

    /// <summary>
    /// Email of the user who created the service account. <c>null</c> when unknown or when the service account was created with a service account token.
    /// </summary>
    [JsonPropertyName("createdByEmail")]
    public required string? CreatedByEmail { get; init; }

    /// <summary>
    /// ID of the user who created the service account. <c>null</c> when unknown or when the service account was created with a service account token.
    /// </summary>
    [JsonPropertyName("createdByUserId")]
    public required string? CreatedByUserId { get; init; }

    /// <summary>
    /// When the service account was created.
    /// </summary>
    [JsonPropertyName("createTime")]
    public required DateTimeOffset? CreateTime { get; init; }

    /// <summary>
    /// When the service account was last changed.
    /// </summary>
    [JsonPropertyName("updateTime")]
    public required DateTimeOffset? UpdateTime { get; init; }

    /// <summary>
    /// Current version of the service account. Send it in <c>If-Match</c> to update or delete.
    /// </summary>
    [JsonPropertyName("etag")]
    public required string? Etag { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
