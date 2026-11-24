using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Statable.Core.Models;
using Statable.Core.Validation.Attributes;
using Statable.Models.Enums;

namespace Statable.Models;

public record CreateApiKeyRequest
{
    [JsonPropertyName("name")]
    [StringLength(100, MinimumLength = 1)]
    public required string Name { get; init; }

    /// <summary>
    /// Defaults to ["read"]. Must be a subset of the authenticating key's scopes, else 403 scope_escalation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("scopes")]
    public IReadOnlyList<Scope>? Scopes { get; init; }

    /// <summary>
    /// Lock the new key to one site. Omit/null = all of the owner's sites. A single-site key MUST pass its own site id here.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("website_id")]
    public long? WebsiteId { get; init; }

    /// <summary>
    /// Outside 1–365 → 400 invalid_expiry.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("expires_in_days")]
    [Minimum(1)]
    [Maximum(365)]
    public int? ExpiresInDays { get; init; } = 90;

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
