using System.Text.Json.Serialization;
using GoogleCloudDatastream.Core.Models;

namespace GoogleCloudDatastream.Models;

/// <summary>
/// Message to represent the option where Datastream will enforce encryption and authenticate server identity. ca_certificate must be set if user selects this option.
/// </summary>
public record EncryptionAndServerValidation
{
    /// <summary>
    /// Optional. Input only. PEM-encoded certificate of the CA that signed the source database server's certificate.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("caCertificate")]
    public string? CaCertificate { get; init; }

    /// <summary>
    /// Optional. The hostname mentioned in the Subject or SAN extension of the server certificate. This field is used for bypassing the hostname validation while verifying server certificate. This is required for scenarios where the host name that datastream connects to is different from the certificate's subject. This specifically happens for private connectivity. It could also happen when the customer provides a public IP in connection profile but the same is not present in the server certificate.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("serverCertificateHostname")]
    public string? ServerCertificateHostname { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
