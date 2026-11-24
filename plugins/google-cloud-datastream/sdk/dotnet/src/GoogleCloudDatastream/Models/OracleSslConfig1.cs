using System.Text.Json.Serialization;
using GoogleCloudDatastream.Core.Models;

namespace GoogleCloudDatastream.Models;

/// <summary>
/// Optional. SSL configuration for the Oracle connection.
/// </summary>
public record OracleSslConfig1
{
    /// <summary>
    /// Output only. Indicates whether the ca_certificate field has been set for this Connection-Profile.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("caCertificateSet")]
    public bool? CaCertificateSet { get; init; }

    /// <summary>
    /// Optional. The distinguished name (DN) mentioned in the server certificate. This corresponds to SSL_SERVER_CERT_DN sqlnet parameter. Refer https://docs.oracle.com/en/database/oracle/oracle-database/19/netrf/local-naming-parameters-in-tns-ora-file.html#GUID-70AB0695-A9AA-4A94-B141-4C605236EEB7 If this field is not provided, the DN matching is not enforced.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("serverCertificateDistinguishedName")]
    public string? ServerCertificateDistinguishedName { get; init; }

    /// <summary>
    /// Input only. PEM-encoded certificate of the CA that signed the source database server's certificate.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("caCertificate")]
    public string? CaCertificate { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
