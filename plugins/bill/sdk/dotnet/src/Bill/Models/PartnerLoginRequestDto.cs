using System.Text.Json.Serialization;
using Bill.Core.Models;

namespace Bill.Models;

/// <summary>
/// API partner login
/// </summary>
public record PartnerLoginRequestDto
{
    /// <summary>
    /// Application key sent to you by BILL when you create a partner account
    /// </summary>
    [JsonPropertyName("appKey")]
    public required string AppKey { get; init; }

    /// <summary>
    /// Email address used to sign in to your BILL account
    /// </summary>
    [JsonPropertyName("username")]
    public required string Username { get; init; }

    /// <summary>
    /// Password used to sign in to your BILL account
    /// </summary>
    [JsonPropertyName("password")]
    public required string Password { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
