using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;

namespace FinixApiReference.Models;

/// <summary>
/// A basic authentication configuration provided by the user.
/// </summary>
public record Basic1
{
    /// <summary>
    /// A user-provided basic authentication password.
    /// </summary>
    [JsonPropertyName("password")]
    public required string Password { get; init; }

    /// <summary>
    /// A user-provided basic authentication username.
    /// </summary>
    [JsonPropertyName("username")]
    public required string Username { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
