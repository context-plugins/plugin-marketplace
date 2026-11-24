using System.Collections.Generic;
using System.Text.Json.Serialization;
using WhoisFreaks.Core.Models;

namespace WhoisFreaks.Models;

public record SslExtensionsInfo
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("authorityKeyIdentifier")]
    public string? AuthorityKeyIdentifier { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("subjectKeyIdentifier")]
    public string? SubjectKeyIdentifier { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("keyUsages")]
    public IReadOnlyList<string>? KeyUsages { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("extendedKeyUsages")]
    public IReadOnlyList<string>? ExtendedKeyUsages { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("crlDistributionPoints")]
    public IReadOnlyList<string>? CrlDistributionPoints { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("authorityInfoAccess")]
    public SslAuthorityInfo? AuthorityInfoAccess { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("subjectAlternativeNames")]
    public SslAlternateNames? SubjectAlternativeNames { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("certificatePolicies")]
    public IReadOnlyList<SslCertificatePolicy>? CertificatePolicies { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
