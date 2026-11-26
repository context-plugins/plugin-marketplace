using System.Text.Json.Serialization;
using ForceDream.Core.Models;

namespace ForceDream.Models;

public record V1WorkforceProofPublicKeyResponse
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("public_key_pem")]
    public string? PublicKeyPem { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("key_id")]
    public string? KeyId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
