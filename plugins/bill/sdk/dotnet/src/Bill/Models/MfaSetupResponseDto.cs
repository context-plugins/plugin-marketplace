using System.Text.Json.Serialization;
using Bill.Core.Models;

namespace Bill.Models;

/// <summary>
/// MFA Setup response.
/// </summary>
public record MfaSetupResponseDto
{
    /// <summary>
    /// MFA setup ID. This value is required for completing your MFA setup validation with <c>POST /v3/mfa/setup/validate</c>.
    /// </summary>
    [JsonPropertyName("setupId")]
    public required string SetupId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
