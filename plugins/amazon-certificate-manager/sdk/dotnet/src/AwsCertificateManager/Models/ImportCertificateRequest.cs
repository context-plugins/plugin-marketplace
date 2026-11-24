using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsCertificateManager.Core.Models;

namespace AwsCertificateManager.Models;

public record ImportCertificateRequest
{
    /// <summary>
    /// The Amazon Resource Name (ARN) of an imported certificate to replace. To import a new certificate, omit this field.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("CertificateArn")]
    public string? CertificateArn { get; init; }

    /// <summary>
    /// The certificate to import.
    /// </summary>
    [JsonPropertyName("Certificate")]
    public required string Certificate { get; init; }

    /// <summary>
    /// The private key that matches the public key in the certificate.
    /// </summary>
    [JsonPropertyName("PrivateKey")]
    public required string PrivateKey { get; init; }

    /// <summary>
    /// The PEM encoded certificate chain.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("CertificateChain")]
    public string? CertificateChain { get; init; }

    /// <summary>
    /// One or more resource tags to associate with the imported certificate. Note: You cannot apply tags when reimporting a certificate.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Tags")]
    public IReadOnlyList<Tag>? Tags { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
