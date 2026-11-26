using System.Text.Json.Serialization;
using Bill.Core.Models;

namespace Bill.Models;

/// <summary>
/// Response for MFA challenge.
/// </summary>
public record MfaChallengeResponseDto
{
    /// <summary>
    /// MFA challenge ID. This value is required for validating the MFA challenge with <c>POST /v3/mfa/challenge/validate</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("challengeId")]
    public string? ChallengeId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
