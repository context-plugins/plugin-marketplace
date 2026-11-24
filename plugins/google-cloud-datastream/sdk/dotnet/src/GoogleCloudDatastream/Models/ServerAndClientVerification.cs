using System.Text.Json.Serialization;
using GoogleCloudDatastream.Core.Models;

namespace GoogleCloudDatastream.Models;

/// <summary>
/// Message represents the option where Datastream will enforce the encryption and authenticate the server identity as well as the client identity. ca_certificate, client_certificate and client_key must be set if user selects this option.
/// </summary>
public record ServerAndClientVerification
{
    /// <summary>
    /// Required. Input only. PEM-encoded certificate used by the source database to authenticate the client identity (i.e., the Datastream's identity). This certificate is signed by either a root certificate trusted by the server or one or more intermediate certificates (which is stored with the leaf certificate) to link the this certificate to the trusted root certificate.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("clientCertificate")]
    public string? ClientCertificate { get; init; }

    /// <summary>
    /// Optional. The hostname mentioned in the Subject or SAN extension of the server certificate. If this field is not provided, the hostname in the server certificate is not validated.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("serverCertificateHostname")]
    public string? ServerCertificateHostname { get; init; }

    /// <summary>
    /// Required. Input only. PEM-encoded server root CA certificate.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("caCertificate")]
    public string? CaCertificate { get; init; }

    /// <summary>
    /// Optional. Input only. PEM-encoded private key associated with the client certificate. This value will be used during the SSL/TLS handshake, allowing the PostgreSQL server to authenticate the client's identity, i.e. identity of the Datastream.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("clientKey")]
    public string? ClientKey { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
