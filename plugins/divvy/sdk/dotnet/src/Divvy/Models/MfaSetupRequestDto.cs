using System.Text.Json.Serialization;
using Divvy.Core.Models;
using Divvy.Models.Enums;

namespace Divvy.Models;

/// <summary>
/// Add phone for MFA setup
/// </summary>
public record MfaSetupRequestDto
{
    /// <summary>
    /// Phone number for MFA setup. The validation <c>token</c> is sent to this number.
    /// </summary>
    [JsonPropertyName("phone")]
    public required string Phone { get; init; }

    [JsonPropertyName("type")]
    public required MfaSetupType Type { get; init; }

    /// <summary>
    /// Set as <c>true</c> to mark the phone number as the primary mobile device. The default value is <c>true</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("primary")]
    public bool? Primary { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
