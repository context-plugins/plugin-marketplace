using System.Text.Json.Serialization;
using Divvy.Core.Models;

namespace Divvy.Models;

/// <summary>
/// API login as user response.
/// </summary>
public record LoginAsUserResponseDto
{
    /// <summary>
    /// API session ID. Use this value in all subsequent API calls to confirm that you are in a signed-in session.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sessionId")]
    public string? SessionId { get; init; }

    /// <summary>
    /// This field is set as <c>true</c> if the current API session is MFA-trusted
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("trusted")]
    public bool? Trusted { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
