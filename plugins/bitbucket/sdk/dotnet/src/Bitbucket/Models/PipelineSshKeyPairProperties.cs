using System.Text.Json.Serialization;
using Bitbucket.Core.Models;

namespace Bitbucket.Models;

public record PipelineSshKeyPairProperties
{
    /// <summary>
    /// The SSH private key. This value will be empty when retrieving the SSH key pair.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("private_key")]
    public string? PrivateKey { get; init; }

    /// <summary>
    /// The SSH public key.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("public_key")]
    public string? PublicKey { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
