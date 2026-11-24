using System.Text.Json.Serialization;
using AwsCertificateManager.Core.Models;

namespace AwsCertificateManager.Models;

public record ExportCertificateResponse
{
    /// <summary>
    /// The base64 PEM-encoded certificate.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Certificate")]
    public string? Certificate { get; init; }

    /// <summary>
    /// The base64 PEM-encoded certificate chain. This does not include the certificate that you are exporting.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("CertificateChain")]
    public string? CertificateChain { get; init; }

    /// <summary>
    /// The encrypted private key associated with the public key in the certificate. The key is output in PKCS #8 format and is base64 PEM-encoded.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("PrivateKey")]
    public string? PrivateKey { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
