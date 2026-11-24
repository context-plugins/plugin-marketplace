using System.Text.Json.Serialization;
using AwsCertificateManager.Core.Models;

namespace AwsCertificateManager.Models;

public record ResendValidationEmailRequest
{
    /// <summary>
    /// String that contains the ARN of the requested certificate. The certificate ARN is generated and returned by the RequestCertificate action as soon as the request is made. By default, using this parameter causes email to be sent to all top-level domains you specified in the certificate request. The ARN must be of the form: arn:aws:acm:us-east-1:123456789012:certificate/12345678-1234-1234-1234-123456789012
    /// </summary>
    [JsonPropertyName("CertificateArn")]
    public required string CertificateArn { get; init; }

    /// <summary>
    /// The fully qualified domain name (FQDN) of the certificate that needs to be validated.
    /// </summary>
    [JsonPropertyName("Domain")]
    public required string Domain { get; init; }

    /// <summary>
    /// The base validation domain that will act as the suffix of the email addresses that are used to send the emails. This must be the same as the Domain value or a superdomain of the Domain value. For example, if you requested a certificate for site.subdomain.example.com and specify a ValidationDomain of subdomain.example.com, ACM sends email to the the following five addresses: admin@subdomain.example.com administrator@subdomain.example.com hostmaster@subdomain.example.com postmaster@subdomain.example.com webmaster@subdomain.example.com
    /// </summary>
    [JsonPropertyName("ValidationDomain")]
    public required string ValidationDomain { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
