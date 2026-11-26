using System.Text.Json.Serialization;
using Bill.Core.Models;

namespace Bill.Models;

/// <summary>
/// Response for MFA challenge validation.
/// </summary>
public record MfaChallengeValidateResponseDto
{
    /// <summary>
    /// MFA ID. This value expires in 30 days.
    /// <para>
    /// When your API session is expiring, this value is required for generating a new MFA-trusted API session with <c>POST /v3/login</c>.
    /// </para>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("rememberMeId")]
    public string? RememberMeId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
