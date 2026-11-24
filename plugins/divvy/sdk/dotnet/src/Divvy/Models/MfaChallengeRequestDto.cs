using System.Text.Json.Serialization;
using Divvy.Core.Models;

namespace Divvy.Models;

/// <summary>
/// Generate MFA challenge
/// </summary>
public record MfaChallengeRequestDto
{
    /// <summary>
    /// Set as <c>false</c> to generate the token with the primary device. The default value is <c>false</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("useBackup")]
    public bool? UseBackup { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
