using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsCertificateManager.Core.Models;
using AwsCertificateManager.Models.Enums;

namespace AwsCertificateManager.Models;

public record PublicCertificateAuthority
{
    /// <summary>
    /// The key algorithms allowed for certificates issued by this certificate authority.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("AllowedKeyAlgorithms")]
    public IReadOnlyList<AllowedKeyAlgorithm>? AllowedKeyAlgorithms { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
