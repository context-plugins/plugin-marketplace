using System.Text.Json.Serialization;
using CircleCi.Core.Models;

namespace CircleCi.Models;

public record ProjectProjectSshKeyRequest
{
    /// <summary>
    /// The hostname the key is associated with
    /// </summary>
    [JsonPropertyName("hostname")]
    public required string Hostname { get; init; }

    /// <summary>
    /// The private key in PEM format
    /// </summary>
    [JsonPropertyName("private_key")]
    public required string PrivateKey { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
