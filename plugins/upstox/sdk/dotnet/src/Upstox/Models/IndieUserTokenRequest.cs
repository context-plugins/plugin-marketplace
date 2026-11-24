using System.Text.Json.Serialization;
using Upstox.Core.Models;

namespace Upstox.Models;

public record IndieUserTokenRequest
{
    /// <summary>
    /// OAuth API key that is a public identifier for app
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("client_id")]
    public string? ClientId { get; init; }

    /// <summary>
    /// OAuth client secret that is a private secret known only to app and authorization server
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("client_secret")]
    public string? ClientSecret { get; init; }

    /// <summary>
    /// To enable/disable otp auth flow
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("otp_verification_disabled")]
    public bool? OtpVerificationDisabled { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
