using System.Text.Json.Serialization;
using Bitbucket.Core.Models;

namespace Bitbucket.Models;

/// <summary>
/// The public key of the known host.
/// </summary>
public record PipelineSshPublicKey2Properties
{
    /// <summary>
    /// The type of the public key.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("key_type")]
    public string? KeyType { get; init; }

    /// <summary>
    /// The base64 encoded public key.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("key")]
    public string? Key { get; init; }

    /// <summary>
    /// The MD5 fingerprint of the public key.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("md5_fingerprint")]
    public string? Md5Fingerprint { get; init; }

    /// <summary>
    /// The SHA-256 fingerprint of the public key.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sha256_fingerprint")]
    public string? Sha256Fingerprint { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
