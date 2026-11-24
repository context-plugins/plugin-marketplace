using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsCertificateManager.Core.Models;
using AwsCertificateManager.Models.Enums;

namespace AwsCertificateManager.Models;

public record Filters
{
    /// <summary>
    /// Specify one or more ExtendedKeyUsage extension values.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("extendedKeyUsage")]
    public IReadOnlyList<ExtendedKeyUsage2>? ExtendedKeyUsage { get; init; }

    /// <summary>
    /// Specify one or more KeyUsage extension values.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("keyUsage")]
    public IReadOnlyList<KeyUsage2>? KeyUsage { get; init; }

    /// <summary>
    /// Specify one or more algorithms that can be used to generate key pairs. Default filtering returns only RSA_1024 and RSA_2048 certificates that have at least one domain. To return other certificate types, provide the desired type signatures in a comma-separated list. For example, "keyTypes": ["RSA_2048","RSA_4096"] returns both RSA_2048 and RSA_4096 certificates.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("keyTypes")]
    public IReadOnlyList<KeyType>? KeyTypes { get; init; }

    /// <summary>
    /// Specify ENABLED or DISABLED to identify certificates that can be exported.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("exportOption")]
    public ExportOption3? ExportOption { get; init; }

    /// <summary>
    /// Identifies the Amazon Web Services service that manages the certificate issued by ACM.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("managedBy")]
    public ManagedBy? ManagedBy { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
