using System;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

/// <summary>
/// Fields of a new API token.
/// </summary>
public record CreateServiceAccountTokenRequest
{
    /// <summary>
    /// Name, unique among the service account's tokens. Leading or trailing whitespace returns <c>400</c>.
    /// </summary>
    [JsonPropertyName("name")]
    [StringLength(100, MinimumLength = 1)]
    public required string Name { get; init; }

    /// <summary>
    /// When the token should stop authenticating. Omit to let the server set the default expiry.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("expiresTime")]
    public DateTimeOffset? ExpiresTime { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
