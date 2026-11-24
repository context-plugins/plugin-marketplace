using System.Text.Json.Serialization;
using DoiT.Core.Models;
using DoiT.Models.Enums;

namespace DoiT.Models;

/// <summary>
/// The state to move an API token to.
/// </summary>
public record UpdateServiceAccountTokenRequest
{
    /// <summary>
    /// <c>active</c> to enable the token, <c>disabled</c> to stop it authenticating. Any other value, <c>deleted</c> and <c>expired</c> included, returns <c>400</c>. Re-enabling a token whose expiry has passed returns <c>422</c>.
    /// </summary>
    [JsonPropertyName("state")]
    public required State1DoiTServiceAccountsApi State { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
