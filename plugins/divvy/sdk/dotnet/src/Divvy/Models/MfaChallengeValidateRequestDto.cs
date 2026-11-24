using System.Text.Json.Serialization;
using Divvy.Core.Models;

namespace Divvy.Models;

/// <summary>
/// Validate MFA challenge
/// </summary>
public record MfaChallengeValidateRequestDto
{
    /// <summary>
    /// MFA <c>challengeId</c> from the <c>POST /v3/mfa/challenge</c> response
    /// </summary>
    [JsonPropertyName("challengeId")]
    public required string ChallengeId { get; init; }

    /// <summary>
    /// Validation <c>token</c> sent to the registered phone number
    /// </summary>
    [JsonPropertyName("token")]
    public required string Token { get; init; }

    /// <summary>
    /// Mobile device name. This is a nickname for your mobile device. Set this field when <c>rememberMe</c> is set as <c>true</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("device")]
    public string? Device { get; init; }

    /// <summary>
    /// Machine name. This is a nickname for the machine used to complete MFA sign in. Set this field when <c>rememberMe</c> is set as <c>true</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("machineName")]
    public string? MachineName { get; init; }

    /// <summary>
    /// Set as <c>true</c> for the generated MFA ID to expire in 30 days
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("rememberMe")]
    public bool? RememberMe { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
