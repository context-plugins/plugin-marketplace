using System.Text.Json.Serialization;
using Statable.Core.Models;

namespace Statable.Models;

public record BootstrapVerifyOtpResponse
{
    /// <summary>
    /// The raw bearer token, returned exactly once.
    /// </summary>
    [JsonPropertyName("token")]
    public required string Token { get; init; }

    /// <summary>
    /// The non-secret view of a key. The raw token is never stored and never appears here — only in the create/rotate responses.
    /// </summary>
    [JsonPropertyName("key")]
    public required ApiKeyModel Key { get; init; }

    [JsonPropertyName("user")]
    public required User User { get; init; }

    /// <summary>
    /// True when this call registered a new account; false when the address already had one and simply received an additional key.
    /// </summary>
    [JsonPropertyName("created")]
    public required bool Created { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
