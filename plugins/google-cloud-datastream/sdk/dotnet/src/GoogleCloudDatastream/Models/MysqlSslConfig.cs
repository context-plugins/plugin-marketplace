using System.Text.Json.Serialization;
using GoogleCloudDatastream.Core.Models;

namespace GoogleCloudDatastream.Models;

/// <summary>
/// MySQL SSL configuration information.
/// </summary>
public record MysqlSslConfig
{
    /// <summary>
    /// Optional. Input only. PEM-encoded private key associated with the Client Certificate. If this field is used then the 'client_certificate' and the 'ca_certificate' fields are mandatory.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("clientKey")]
    public string? ClientKey { get; init; }

    /// <summary>
    /// Optional. Input only. PEM-encoded certificate that will be used by the replica to authenticate against the source database server. If this field is used then the 'client_key' and the 'ca_certificate' fields are mandatory.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("clientCertificate")]
    public string? ClientCertificate { get; init; }

    /// <summary>
    /// Output only. Indicates whether the client_certificate field is set.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("clientCertificateSet")]
    public bool? ClientCertificateSet { get; init; }

    /// <summary>
    /// Output only. Indicates whether the ca_certificate field is set.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("caCertificateSet")]
    public bool? CaCertificateSet { get; init; }

    /// <summary>
    /// Input only. PEM-encoded certificate of the CA that signed the source database server's certificate.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("caCertificate")]
    public string? CaCertificate { get; init; }

    /// <summary>
    /// Output only. Indicates whether the client_key field is set.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("clientKeySet")]
    public bool? ClientKeySet { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
