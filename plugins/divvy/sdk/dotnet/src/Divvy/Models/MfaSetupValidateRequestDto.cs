using System.Text.Json.Serialization;
using Divvy.Core.Models;
using Divvy.Models.Enums;

namespace Divvy.Models;

/// <summary>
/// Validate MFA setup
/// </summary>
public record MfaSetupValidateRequestDto
{
    /// <summary>
    /// MFA <c>setupId</c> from the <c>POST /v3/mfa/setup</c> response
    /// </summary>
    [JsonPropertyName("setupId")]
    public required string SetupId { get; init; }

    [JsonPropertyName("type")]
    public required MfaSetupType Type { get; init; }

    /// <summary>
    /// Validation <c>token</c> sent to the registered phone number
    /// </summary>
    [JsonPropertyName("token")]
    public required string Token { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
