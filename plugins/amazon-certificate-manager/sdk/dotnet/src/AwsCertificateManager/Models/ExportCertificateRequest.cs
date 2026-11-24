using System.Text.Json.Serialization;
using AwsCertificateManager.Core.Models;

namespace AwsCertificateManager.Models;

public record ExportCertificateRequest
{
    /// <summary>
    /// An Amazon Resource Name (ARN) of the issued certificate. This must be of the form: arn:aws:acm:region:account:certificate/12345678-1234-1234-1234-123456789012
    /// </summary>
    [JsonPropertyName("CertificateArn")]
    public required string CertificateArn { get; init; }

    /// <summary>
    /// Passphrase to associate with the encrypted exported private key. When creating your passphrase, you can use any ASCII character except #, $, or %. If you want to later decrypt the private key, you must have the passphrase. You can use the following OpenSSL command to decrypt a private key. After entering the command, you are prompted for the passphrase. openssl rsa -in encrypted_key.pem -out decrypted_key.pem
    /// </summary>
    [JsonPropertyName("Passphrase")]
    public required string Passphrase { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
