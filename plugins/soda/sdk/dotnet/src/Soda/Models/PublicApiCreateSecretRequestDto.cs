using System.Text.Json.Serialization;
using Soda.Core.Models;

namespace Soda.Models;

public record PublicApiCreateSecretRequestDto
{
    [JsonPropertyName("encryptedValue")]
    public required string EncryptedValue { get; init; }

    [JsonPropertyName("encryptionKey")]
    public required string EncryptionKey { get; init; }

    [JsonPropertyName("name")]
    public required string Name { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
