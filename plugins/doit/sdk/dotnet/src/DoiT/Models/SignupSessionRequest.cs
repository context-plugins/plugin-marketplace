using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

public record SignupSessionRequest
{
    /// <summary>
    /// The one-time token returned by verifySignupRequest.
    /// </summary>
    [JsonPropertyName("activationToken")]
    public required string ActivationToken { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
