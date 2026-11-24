using System.Text.Json.Serialization;
using Fillo.Core.Models;

namespace Fillo.Models;

public record ApiV1ManageSyncTokensResponse1
{
    /// <summary>
    /// The <c>fsync_</c> plaintext. Shown once — store it now.
    /// </summary>
    [JsonPropertyName("token")]
    public required string Token { get; init; }

    [JsonPropertyName("name")]
    public required string Name { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
