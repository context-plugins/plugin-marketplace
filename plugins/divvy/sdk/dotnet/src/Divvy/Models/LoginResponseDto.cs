using System.Text.Json.Serialization;
using Divvy.Core.Models;

namespace Divvy.Models;

/// <summary>
/// Login response.
/// </summary>
public record LoginResponseDto
{
    /// <summary>
    /// API session ID. Use this value in all subsequent API calls to confirm that you are in a signed-in session.
    /// </summary>
    [JsonPropertyName("sessionId")]
    public required string SessionId { get; init; }

    /// <summary>
    /// Organization ID associated with the signed-in user
    /// </summary>
    [JsonPropertyName("organizationId")]
    public required string OrganizationId { get; init; }

    /// <summary>
    /// BILL-generated ID of the signed-in user
    /// </summary>
    [JsonPropertyName("userId")]
    public required string UserId { get; init; }

    /// <summary>
    /// This field is set as <c>true</c> if the current API session is MFA-trusted
    /// </summary>
    [JsonPropertyName("trusted")]
    public required bool Trusted { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
